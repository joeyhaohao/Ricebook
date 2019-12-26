var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  username: String,
  headline: String,
  following: [ String ],
  email: String,
  dob: String,
  zipcode: String,
  avatar: String
});

var userSchema = new mongoose.Schema({
  username: String,
  salt: String,
  hash: String,
  auth: Object
});

const commentSchema = new mongoose.Schema({
  author: String,
  date: {type: Date, default: Date.now},
  text: String
});

const articleSchema = new mongoose.Schema({
  author: String,
  text: String,
  date: {type: Date, default: Date.now},
  image: String,
  comments: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

exports.User = mongoose.model('User', userSchema);
exports.Profile = mongoose.model('Profile', profileSchema);
exports.Article = mongoose.model('Article', articleSchema);
exports.Comment = mongoose.model('Comment', commentSchema);
