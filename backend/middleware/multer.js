const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Image = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, //5 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
      return cb(null, false, (req.imageValidationError = true));
    }
    cb(null, true);
  },
});

module.exports = Image;
