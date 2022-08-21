var express = require('express');
var path = require('path');
var router = express.Router();
var helper = require('../src/helper')


/* GET home page. */
router.get('*', function(req, res, next) {
  helper.setCrosHeader(res,true)
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

module.exports = router;
