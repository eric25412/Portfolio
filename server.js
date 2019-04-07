require("dotenv").config(); 

var nodemailer = require("nodemailer");

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
var db = require("/");

var app = express();
var PORT = process.env.PORT || 8080;

