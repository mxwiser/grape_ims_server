var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
var logger = require('morgan');

var app = express();


var staticRouter = require('./routes/static');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',staticRouter);
app.use('/',express.static('./dist'));



//routes
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
app.use('/api', apiRouter);
app.use('/', indexRouter);


process.env.PORT="3001";


module.exports = app;
