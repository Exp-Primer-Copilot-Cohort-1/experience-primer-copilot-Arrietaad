// Create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// Set up mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/recipes');

// Create mongoose schema
var CommentSchema = mongoose.Schema({
    recipeId: String,});