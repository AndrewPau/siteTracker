var mongoose = require('mongoose');
var login = require('../models/login');

// PUT login/:username
// Use this to change a profile's username
module.exports.updateUsername = function(username) {
    // Mongoose call
}

// PUT login/:password
// Use this to change a profile's password
module.exports.updatePassword = function(password) {
    // Mongoose call
}

// POST login/:username/:password
// Use this to create a new profile
module.exports.createUser = function(username, password) {
    // Mongoose call
}

// GET /login/:username
module.exports.getUser = function(username) {
    // Mongoose call
}

// DELETE /login/:username
module.exports.deleteUser = function(username) {
    // Mongoose call
}
