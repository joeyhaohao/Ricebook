const User = require('./model').User;
const Profile = require('./model').Profile;
const Article = require('./model').Article;

const md5 = require('md5');
const cookieParser = require('cookie-parser');
const redisUrl = process.env.REDIS_URL || 6379;
const redis = require('redis').createClient(redisUrl);
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// const host = 'http://localhost:4200';
// const server = 'http://localhost:3000';
const host = 'http://yz157-ricebook.surge.sh';
const server = 'https://yz157-ricebook.herokuapp.com';
const cookieKey = "sid";
// const session = {};

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id).exec(function (err, user) {
    done(null, user);
  })
});

const config = {
  clientID: '571931973618576',
  clientSecret: '268a4d993fcb8f870cc307f74124692c',
  callbackURL: server + '/auth/facebook/callback',
  passReqToCallback: true
};
passport.use(new FacebookStrategy(config,
  function (req, accessToken, refreshToken, profile, done) {
    const username = profile.displayName;
    const sid = req.cookies[cookieKey];
    // Login new FB user
    if (!sid) {
      User.findOne({username: username}).exec(function (err, dbUser){
        if (err) {
          return done(err);
        } else if (dbUser == null) {
          createFBUser(username, done);
        } else {
          return done(null, dbUser);
        }
      })
    } else {
      var usernameRice;
      redis.hget('sessions', sid, (err, user) => {
        if (err) {
          return done(err);
        } else {
          usernameRice = JSON.parse(user).username;
          User.findOne({username: usernameRice}).exec(function (err, userRice) {
            User.findOne({username: username}).exec(function (err, userFB) {
              userRice.auth.facebook = username;
              userRice.markModified('auth');
              userRice.save();
              if (userFB) {
                // Link to FB account
                linkAccount(userRice, userFB, done);
              }
            })
          })
        }
      });
    }
  })
);

const createFBUser = (username, done) => {
  const user = {username: username, auth: { facebook : username }};
  User.create(user, function(err, newUser) {
    if (err) {
      return done(err);
    } else {
      const profile = {
        username: user.username, email: user.username + '@facebook.com', zipcode: '77005', dob: '10/01/1949',
        headline: "Default headline", following: [],
        avatar: 'https://www.facebook.com/images/fb_icon_325x325.png',
      };
      Profile.create(profile, function (err, newProfile) {
        if (err) {
          return done(err);
        } else {
          const sessionId = md5("Rice the best" + new Date().getTime() + user.username);
          redis.hmset('sessions', sessionId, JSON.stringify(newUser));
          // res.cookie(cookieKey, sessionId, {maxAge: 1000 * 3600, httpOnly: true});
          done(null, newUser);
        }
      })
    }
  })
};

const linkAccount = (userRice, userFB, done) => {
  Profile.findOne({ username: userRice.username }).exec(function (err, profileRice) {
    if (err) {
      return done(null);
    } else {
      Profile.findOne({ username: userFB.username }).exec(function (err, profileFB) {
        if (err) {
          return done(null);
        } else {
          profileRice.following = profileRice.following.concat(profileFB.following);
          profileRice.save();
          // console.log(profileRice);
          Article.update({ author: userFB.username },
            { $set: { 'author': userRice.username } },
            { new: true, multi: true }, function () {});
          Article.update({ 'comments.author': userFB.username },
            { $set: { 'comments.$.author': userRice.username } },
            { new: true, multi: true }, function () {});

          User.findOneAndDelete({username: userFB.username}, function(err){
            if (err) {
              return done(null);
            }
          });
          return done(null, profileRice);
        }
      })
    }
  });
};

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.username = req.user.username;
    next();
    return;
  }
  if(!req.cookies || !req.cookies[cookieKey]){
    res.status(401).send("Unauthorized");
    return;
  }
  const sid = req.cookies[cookieKey];
  // const user = session[sid];

  redis.hget('sessions', sid, (err, user) => {
    if (err) {
      res.status(401).send("Unauthorized");
    } else {
      req.username = JSON.parse(user).username;
      next();
    }
  })
};

const register = (req, res) => {
  const user = req.body;
  User.find({ username: user.username }).exec(function (err, dbUser) {
    if (err) {
      res.status(400).send({error: err});
    } else if (dbUser.length > 0) {
      res.status(400).send({error: 'Username already exist'});
    } else {
      const salt = 'random salt' + String(Math.random() * 10);
      const hash = md5(salt + user.pwd);
      const newUser = {
        username: user.username, salt: salt, hash: hash, auth: {rice: user.username}
      };

      const profile = {
        username: user.username, email: user.email, zipcode: user.zipcode, dob: user.dob,
        headline: "Default headline", following: [],
        avatar: 'https://yt3.ggpht.com/a/AGF-l7_4H3mW2jBrMmn3pO7jG99a2A8cY4SVi9WeTQ=s900-c-k-c0xffffffff-no-rj-mo',
      };
      Profile.create(profile, function (err, newProfile) {
        if (err) {
          res.status(400).send({error: err});
        } else {
          User.create(newUser, function (err, userObj) {
            if (err) {
              res.status(400).send({error: err});
            } else {
              res.status(200).send({username: user.username, result: 'register success'});
            }
          });
        }
      })
    }
  });
};

const login = (req, res) => {
  const user = req.body;
  User.findOne({ username: user.username }).exec(function (err, dbUser) {
    if (err) {
      res.status(401).send({error: err});
    } else if (dbUser == null) {
      res.status(401).send({error: 'User not found'});
    } else {
      const hashpwd = md5(dbUser.salt + user.pwd);
      if (hashpwd !== dbUser.hash) {
        res.status(401).send({error: 'Invalid password'});
      } else {
        const sessionId = md5("Rice the best" + new Date().getTime() + user.username);
        // session[sessionId] = dbUser;
        redis.hmset('sessions', sessionId, JSON.stringify(dbUser));
        res.cookie(cookieKey, sessionId, {maxAge: 1000 * 3600, httpOnly: true});
        res.status(200).send({userId: dbUser._id, username: user.username, result: 'Login success'});
      }
    }
  });
};

const logout = (req, res) => {
  // delete session[req.cookies[cookieKey]];
  if (req.isAuthenticated()) {
    req.logout();
  } else {
    redis.hdel('sessions', req.cookies[cookieKey]);
    res.clearCookie(cookieKey);
  }
  res.status(200).send({result: 'Logout success', username: req.username});
};

const resetPassword = (req, res) => {
  const username = req.username;
  const newPassword = req.body.password;
  User.findOne({username: username}, (err, user) => {
    if (err){
      res.status(400).send({error: err})
    } else {
      if (user){
        user.hash = md5(user.salt + newPassword);
        user.save();
        res.status(200).send({username: username, result: "success"})
      } else {
        res.status(400).send({error: 'User Not found'})
      }
    }
  })
};


module.exports = (app) => {
  app.use(cookieParser());
  app.use(session({ secret: 'RiceOwl'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook',
    { failureRedirect: host+'/#/auth', successRedirect: host+'/#/main' }));

  app.post('/register', register);
  app.post('/login', login);
  app.use(isLoggedIn);
  app.put('/logout', logout);
  app.put('/password', resetPassword);
};

