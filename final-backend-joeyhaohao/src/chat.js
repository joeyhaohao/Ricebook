var socketUsers = [];
const Profile = require('./model.js').Profile;

function initSocket(server) {
  const io = require('socket.io').listen(server);
  io.on('connection', function (socket) {
    console.log("new user connected");

    socket.emit("createSocketId", socket.id);

    socket.on("login", function(username){
      // This is the user's unique ID to be used on ng-chat as the connected user.
      socket.emit("createSocketId", socket.id);

      socket.broadcast.emit("friendListUpdate", socketUsers);

      socketUsers.push({
        participant: {
          id: socket.id, // Assigning the socket ID as the user ID in this example
          displayName: username,
          status: 0, // ng-chat UserStatus.Online,
          avatar: null
        }
      });
    });

    socket.on('logout', function(username) {
      console.log('User logout!');

      var i = socketUsers.findIndex(x => x.participant.displayName === username);
      socketUsers.splice(i, 1);

      socket.broadcast.emit("friendsListUpdate", socketUsers);
    });

    // On disconnect remove this socket client from the users collection
    socket.on('disconnect', function() {
      console.log('User disconnected!');

      var i = socketUsers.findIndex(x => x.participant.id === socket.id);
      socketUsers.splice(i, 1);

      socket.broadcast.emit("friendsListUpdate", socketUsers);
    });

    socket.on("sendMessage", function(message){
      io.to(message.toId).emit("messageReceived", {
        user: socketUsers.find(x => x.participant.id === message.fromId).participant,
        message: message
      });

      console.log("Message dispatched:");
      console.log(message);
    });
  });
}

const getChatFriend = (req, res) => {
  const username = req.username;
  Profile.findOne({username: username}).exec((err, profile)=>{
    if(err){
      res.status(400).send({error: err})
    } else if (profile) {
      Profile.find({username: {$in: profile.following}}).exec((err, followProfiles) => {
        let friendList = [];
        followProfiles.forEach(function(profile) {
          let friend = {username: profile.username, avatar: profile.avatar};
          let findSocketId = socketUsers.filter(user => user.participant.displayName === friend.username);
          if (findSocketId.length > 0) {
            friend['onlineStatus'] = 0;
            friend['id'] = findSocketId[0].participant.id;
          } else {
            friend['onlineStatus'] = 3;
            friend['id'] = Math.floor(Math.random()*100);
          }
          friendList.push(friend);
        });
        res.status(200).send({username: username, friendList: friendList})
      })
    } else{
      res.status(400).send({error: 'No Profile Found'})
    }
  })
};

module.exports = (app, server) => {
  initSocket(server);
  app.get('/chatFriends', getChatFriend);
};
