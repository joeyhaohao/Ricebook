const multer = require('multer')
const cloudinary = require('cloudinary');

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

cloudinary.config({
  cloud_name: 'dj3opcxmz',
  api_key: process.env.CLOUDINARY_API_KEY || "922187719718953",
  api_secret: process.env.CLOUDINARY_API_SECRET || "kM-pKFu__bS9pc2TUiJu-Cl_MKc"
});

module.exports = { upload, cloudinary }
