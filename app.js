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
// Use a different db later when deploying API
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

// Set up routes
var login = require('./routes/login');
var data = require('./routes/data');

app.use('/api/login', login);
app.use('/api/data', data);

// Do I need this? 
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Welcome to Site Tracker!');
    // res.sendFile('index.html');
});

// Enable Cross Origin Resource Sharing (CORS)
app.all('/*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,X-Requested-With');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
});

// Start the server
var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});
