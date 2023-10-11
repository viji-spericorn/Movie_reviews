var express = require('express');
var router = express.Router();

const controllers = require('./controller');

router.post('/login', controllers.login);

module.exports = router;
