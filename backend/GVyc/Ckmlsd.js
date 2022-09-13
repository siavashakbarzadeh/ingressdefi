const aws                  = require("aws-sdk");
const multer               = require("multer");
const multerS3             = require("multer-s3");
var common                 = require('./common');

var s3 = new aws.S3({ 
  "accessKeyId":filedetails.accessKeyId,
  "secretAccessKey":filedetails.secretAccessKey,
  "region":filedetails.region
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};



const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket:'tifon',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "Folder" });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname.split('.')[0]+Date.now().toString()+'.'+file.originalname.split('.')[1]);
    },
  }),
});

module.exports = upload;