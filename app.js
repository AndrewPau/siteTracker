var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
// TODO: Set up Mongoose to finish function calls
// TODO: Set up Passport to authenticate API calls (Do I need a separate route for login?)

// Use JSON as data format
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Enable Cross Origin Resource Sharing (CORS) (Declare before all routes for headers to be effective)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,X-Requested-With');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
});

// Connect to MongoDB
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

app.use(express.static('views'));

app.get('/', function(req, res) {
    res.send('Welcome to Site Tracker!');
    // res.sendFile('index.html');
});

// Start the server
var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});
