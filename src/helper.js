var express = require('express');
var path = require('path');






module.exports = {

    setCrosHeader(res) {
        if (process.env.SERVER_STATE=="developement")
            res.header("Access-Control-Allow-Origin", "*");
    }
}