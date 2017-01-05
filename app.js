var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// Use JSON as data format
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection();

// Set up routes
var login = require('./routes/login');
var userData = require('./routes/userData');

app.use('/api/login', login);
app.use('/api/userData', userData);

// Start the server
var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});
