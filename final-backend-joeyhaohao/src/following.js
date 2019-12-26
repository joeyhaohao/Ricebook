const Profile = require('./model.js').Profile;
const User = require('./model.js').User;

const getFollowing = (req, res) => {
  const username = req.username;
  Profile.findOne({username: username}).exec((err, profile)=>{
    if(err){
      res.status(400).send({error: err})
    } else if (profile) {
      Profile.find({username: {$in: profile.following}}).exec((err, followProfiles) => {
        res.status(200).send({username: username, following: followProfiles})
      })
    } else{
      res.status(400).send({error: 'No Profile Found'})
    }
  })
};

const putFollowing = (req, res) => {
  const username = req.username;
  const followUser = req.body.username;
  User.findOne({username: followUser}).exec((err, user) =>{
    if(err){
      res.status(400).send({error: err})
    } else if (!user || username === followUser.username) {
      res.status(400).send({error: 'Invalid User'})
    } else {
      Profile.findOneAndUpdate({username: username}, {$addToSet: {following: followUser}}, {new: true}).exec((err, profile)=>{
        if(err){
          res.status(400).send({error: err})
        } else if (profile) {
          res.status(200).send({username: username, following: profile.following})
        } else{
          res.status(400).send({error: 'No Profile Found'})
        }
      })
    }
  })
};

const deleteFollowing = (req, res) => {
  const username = req.username;
  const unfollowUser = req.params.user;
  Profile.findOneAndUpdate({username: username}, {$pull: {following: unfollowUser}}, {new:true}).exec((err, profile)=>{
    if (err) {
      res.status(400).send({error: err})
    } else if (profile){
      res.status(200).send({username: username, following: profile.following})
    } else {
      res.status(400).send({result:'No Profile Found!'})
    }
  })
};

module.exports = app => {
  app.get('/following/:user?', getFollowing);
  app.put('/following/:user?', putFollowing);
  app.delete('/following/:user', deleteFollowing)
};
