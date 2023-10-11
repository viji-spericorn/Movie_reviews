var express = require('express');
var router = express.Router();

const imageValidation = require('../../middleware/multer');
const controllers = require('./controller');
//const { studentValidationSchema } = require('./validator');

//routers for all venue functions

router.get('/', controllers.listvenues);
router.post('/', imageValidation.single('Image'), controllers.createvenue);
router.patch('/', imageValidation.single('Image'), controllers.editvenues);
router.get('/:id', controllers.viewvenues);

module.exports = router;
