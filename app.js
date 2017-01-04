var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection();

// TODO: Apply routes here
// var route = require('routes/');
// app.use('/route', route);


var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port);
});
