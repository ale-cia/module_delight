// console.log('Working!');
var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var port = 5001;

//pulls in moduleThree
var moduleThree = require('./moduleThree.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));



app.listen(port);
console.log("Listening on port: ", port);