var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/auth', require('../api/Auth/index'));
router.use('/admin', require('../api/UserMnagement/index'));
router.use('/venue', require('../api/venueManagement/index'));
module.exports = router;
