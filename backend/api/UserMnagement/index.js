var express = require('express');
var router = express.Router();

const imageValidation = require('../../middleware/multer');
const controllers = require('./controller');
const { authValidationSchema } = require('./validator');

//routers for all subadmins functions
router.get('/', controllers.listsubadmins);
router.post(
  '/',
  imageValidation.single('Image'),
  authValidationSchema,
  controllers.createsubadmins
);
router.patch('/', imageValidation.single('photo'), controllers.editsubadmins);

module.exports = router;
