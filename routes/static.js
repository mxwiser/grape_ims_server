var express = require('express');
var path = require('path');
var router = express.Router();
var helper = require('../src/helper')


router.get('/', function(req, res, next) {
    helper.setCrosHeader(res,true);
    next();
});

router.get('/index.html', function(req, res, next) {
    helper.setCrosHeader(res,true);
    next();
});

module.exports = router;