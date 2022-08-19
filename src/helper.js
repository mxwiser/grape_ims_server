var express = require('express');
var path = require('path');






module.exports = {

    setHtmlHeader(res) {
    res.header("Access-Control-Allow-Origin", "*");
    }
}