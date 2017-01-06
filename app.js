var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
// TODO: Set up Mongoose to finish function calls
// TODO: Set up Passport to authenticate API calls (Do I need a separate route for login?)
// TODO: Set up bcrypt to hash password

// Use JSON as data format
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/mydb');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB!");
// });

// Set up routes
var login = require('./routes/login');
var data = require('./routes/data');

app.use('/api/login', login);
app.use('/api/data', data);

app.get('/', function(req, res) {
    res.send('Welcome to Site Tracker!');
    // res.sendFile('index.html', options, function(err) {
    //  }
});

// Start the server
var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});
