var express = require('express');
var path = require('path');






module.exports = {

    setCrosHeader(res,ENSTATE) {

        if (ENSTATE){
            if (process.env.SERVER_STATE=="developement")
                res.header("Access-Control-Allow-Origin", "*");
        }else
            res.header("Access-Control-Allow-Origin", "*");



    }
}