var mongoose = require('mongoose');
var data = require('../models/data');

// PUT data/:stats
// Use this to update site statistics
module.exports.updateData = function(stats) {
    // Mongoose call
}

// POST data/:stats
// Use this to create new site data
module.exports.createData = function(stats) {
    // data.save or data.create
    // Mongoose call
}

// GET data/:stats
// Use this to get site data
module.exports.getData = function(username) {
    // data.find
    // Mongoose call
}

// DELETE data/:stats
// Use this to delete site data
module.exports.deleteData = function(username) {
    // Mongoose call
}
