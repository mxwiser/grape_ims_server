var express = require('express');
var router = express.Router();

/* GET users listing. */


var appRouter = require('./app');
router.use("/app",appRouter);





router.use(function (req, res, next) {
   next();
});

router.get('*', function(req, res, next) {
    res.send('respond with a resource aaa');
});






module.exports = router;
