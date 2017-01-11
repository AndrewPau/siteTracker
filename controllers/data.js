var mongoose = require('mongoose');
var data = require('../models/data');

// GET data/:stats
// Use this to get site data
module.exports.getData = function(username) {
    // data.find
    // Mongoose call
}

// PUT data/:stats
// Use this to update/create site statistics
module.exports.updateData = function(stats) {
    // Mongoose call
}

// POST data/:stats
// Use this to initialize a new user
module.exports.createData = function(stats) {
    // data.save or data.create
    // Mongoose call
}

// DELETE data/:stats
// Use this to user data
module.exports.deleteData = function(username) {
    // Mongoose call
}
