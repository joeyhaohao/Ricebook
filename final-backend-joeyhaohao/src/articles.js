const Article = require('./model.js').Article;
const Profile = require('./model.js').Profile;
const Comment = require('./model.js').Comment;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require('./uploadCloudinary').upload;
const cloudinary = require('./uploadCloudinary').cloudinary;
app.use(bodyParser.json());

const getArticles = (req, res) => {
  if (req.params.id) {
    Article.find({author: req.params.id}).populate("comments").exec((err, articles)=>{
      if (err){
        res.status(400).send({error: err})
      } else if (articles){
        res.status(200).send({articles: articles})
      } else {
        res.status(400).send({error: 'No Article Found'})
      }
    })
  } else {
    Profile.findOne({username: req.username}).exec((err, profile) => {
      if (err) {
        res.status(400).send({error: err});
      } else if (profile) {
        const users = [req.username].concat(profile.following);
        Article.find({ author: { $in: users } }).sort({ date: -1 }).limit(10).populate("comments").exec((err, articles) => {
          if (err){
            res.status(400).send({error: err})
          } else if (articles){
            res.status(200).send({articles: articles})
          } else {
            res.status(400).send({error: 'No Article Found'})
          }
        })
      } else {
        res.status(400).send({error: 'No Following User Found'})
      }
    })
  }
};

const putArticle = (req, res) => {
  const articleId = req.params.id;
  const commentId = req.body.commentId;
  const text = req.body.text;
  // Add new comment
  if (commentId === -1) {
    const comment = {author: req.username, text: text};
    Comment.create(comment, function (err, newComment) {
      if (err) {
        res.status(400).send({error: err});
      } else {
        Article.findByIdAndUpdate(articleId,{$push: {comments: newComment}},{new: true},(err, article) => {
          if(err) {
            res.status(400).send({error: err})
          } else {
            if (comment){
              res.status(200).send({article: article})
            } else{
              res.status(404).send({error: 'Article Not Found'})
            }
          }
        })
      }
    })
    // Edit comment
  } else if (commentId) {
    Comment.findByIdAndUpdate(commentId, {text: text, date: new Date().getTime()}, {new: true}, (err, comment) => {
      if(err) {
        res.status(400).send({error: err})
      } else {
        if (comment){
          res.status(200).send({comment: comment})
        } else{
          res.status(404).send({error: 'Comment Not Found'})
        }
      }
    })
    // Edit article
  } else {
    Article.findByIdAndUpdate(articleId, {text: text, date: new Date().getTime()},
      {new: true}, (err, article) => {
      if (err){
        res.status(400).send({error: err})
      } else {
        if (article){
          res.status(200).send({article: article})
        } else {
          res.status(400).send({error: 'Article Not found'})
        }
      }
    })
  }
};

const postArticle = (req, res) => {
  const article = {
    author: req.username,
    text: req.body.text,
  };
  if (req.file) {
    cloudinary.uploader.upload(req.file.path, function(result) {
      article.image = result.secure_url;
      Article.create(article, function (err, newArticle) {
        if (err) {
          res.status(400).send({error: err});
        } else {
          res.status(200).send({article: newArticle});
        }
      })
    })
  } else {
    article.image = "https://i.pinimg.com/originals/db/8b/29/db8b297c0d72e6c101cd3fd5c2d7aab8.png";
    Article.create(article, function (err, newArticle) {
      if (err) {
        res.status(400).send({error: err});
      } else {
        res.status(200).send({article: newArticle});
      }
    })
  }

};

module.exports = (app) => {
  app.get('/articles/:id?', getArticles);
  app.put('/articles/:id', putArticle);
  app.post('/articles', upload.single('image'), postArticle);
};
