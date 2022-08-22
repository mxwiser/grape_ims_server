var express = require('express');
var router = express.Router();

/* GET APP listing. */


router.use(function (req, res, next) {

    next();
});



//API APP
router.get('/getName', function(req, res, next) {
    res.send('Mxw');
});
router.get('*', function(req, res, next) {
    res.send('Mxw*');
});
//end API APP


module.exports = router;
