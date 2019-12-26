const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
app.use(bodyParser.json());
const Profile = require('./model').Profile;

var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dj3opcxmz',
  api_key: process.env.CLOUDINARY_API_KEY || "922187719718953",
  api_secret: process.env.CLOUDINARY_API_SECRET || "kM-pKFu__bS9pc2TUiJu-Cl_MKc"
});

const getHeadline = (req, res) => {
  const username = req.params.user || req.username;
  Profile.findOne({username: username}).exec(function (err, profile) {
    if (err) {
      res.status(400).send({error: err});
    } else if (profile) {
      res.status(200).send({username: username, headline: profile['headline']});
    } else {
      res.status(400).send({error: 'Profile Not Found'});
    }
  })
};

const putHeadLine = (req, res) => {
  const username = req.username;
  const newHeadline = req.body.headline;
  Profile.findOneAndUpdate({username: username}, {headline: newHeadline}, {new: true}, (err, profile) => {
    if (err){
      res.status(400).send({error: err})
    } else {
      if (profile){
        res.status(200).send({username: username, headline: newHeadline})
      } else {
        res.status(400).send({error: 'Profile Not found'})
      }
    }
  })
};

const getEmail = (req, res) => {
  const username = req.params.user || req.username;
  Profile.findOne({username: username}).exec(function (err, profile) {
    if (err) {
      res.status(400).send({error: err});
    } else if (profile) {
      res.status(200).send({username: username, email: profile['email']});
    } else {
      res.status(400).send({error: 'Profile Not Found'});
    }
  })
};

const putEmail = (req, res) => {
  const username = req.username;
  const newEmail = req.body.email;
  Profile.findOneAndUpdate({username: username}, {email: newEmail}, {new: true}, (err, profile) => {
    if (err){
      res.status(400).send({error: err})
    } else {
      if (profile){
        res.status(200).send({username: username, email: newEmail})
      } else {
        res.status(400).send({error: 'Profile Not found'})
      }
    }
  })
};

const getZipcode = (req, res) => {
  const username = req.params.user || req.username;
  Profile.findOne({username: username}).exec(function (err, profile) {
    if (err) {
      res.status(400).send({error: err});
    } else if (profile) {
      res.status(200).send({username: username, zipcode: profile['zipcode']});
    } else {
      res.status(400).send({error: 'Profile Not Found'});
    }
  })
};

const putZipcode = (req, res) => {
  const username = req.username;
  const newZipcode = req.body.zipcode;
  Profile.findOneAndUpdate({username: username}, {zipcode: newZipcode}, {new: true}, (err, profile) => {
    if (err){
      res.status(400).send({error: err})
    } else {
      if (profile){
        res.status(200).send({username: username, zipcode: newZipcode})
      } else {
        res.status(400).send({error: 'Profile Not found'})
      }
    }
  })
};

const getDob = (req, res) => {
  const username = req.params.user || req.username;
  Profile.findOne({username: username}).exec(function (err, profile) {
    if (err) {
      res.status(400).send({error: err});
    } else if (profile) {
      res.status(200).send({username: username, dob: profile['dob']});
    } else {
      res.status(400).send({error: 'Profile Not Found'});
    }
  })
};

const getAvatar = (req, res) => {
  const username = req.params.user || req.username;
  Profile.findOne({username: username}).exec(function (err, profile) {
    if (err) {
      res.status(400).send({error: err});
    } else if (profile) {
      res.status(200).send({username: username, avatar: profile['avatar']});
    } else {
      res.status(400).send({error: 'Profile Not Found'});
    }
  })
};

const putAvatar = (req, res) => {
  const username = req.username;
  cloudinary.uploader.upload(req.file.path, function(result) {
    var url = result.secure_url;
    Profile.findOneAndUpdate({username: username}, {avatar: url}, {new: true}, (err, profile) => {
      if (err){
        res.status(400).send({error: err})
      } else {
        if (profile){
          res.status(200).send({username: username, avatar: url})
        } else {
          res.status(400).send({error: 'Profile Not found'})
        }
      }
    });
  });
};

module.exports = (app) => {
  app.get('/headline/:user?', getHeadline);
  app.put('/headline', putHeadLine);
  app.get('/email/:user?', getEmail);
  app.put('/email', putEmail);
  app.get('/zipcode/:user?', getZipcode);
  app.put('/zipcode', putZipcode);
  app.get('/dob/:user?', getDob);
  app.get('/avatar/:user?', getAvatar);
  app.put('/avatar', upload.single('image'), putAvatar);
};
