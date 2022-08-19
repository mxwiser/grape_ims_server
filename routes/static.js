var express = require('express');
var path = require('path');
var router = express.Router();
var helper = require('../src/helper')


router.get('*', function(req, res, next) {
    helper.setHtmlHeader(res);
    next();
   // res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

module.exports = router;