var express = require('express');
var router = express.Router();

/* GET users listing. */


var appRouter = require('./app');

router.use("/app",appRouter);


router.get('*', function(req, res, next) {
    res.send('respond with a resource aaa');
});






module.exports = router;
