'use strict';

const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const logger = require("morgan");

const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = Promise;

