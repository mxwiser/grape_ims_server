var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static('./dist'))


//routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/api', usersRouter);
app.use('/', indexRouter);


module.exports = app;
