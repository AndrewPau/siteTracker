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

// Use this to create a new profile
module.exports.createUser = function(user, callback) {
    // Check if the name is taken before creating it
    login.findOne({username : user.username}, function(err, val) {
        if (val) {
            console.log(val);
        }
        login.create({username : user.username, password: user.pass}, callback);
    });
}

// GET /login/:username/:password
module.exports.getUser = function(user, pass, callback) {
    login.findOne({username : user, password : pass}, callback)
}

// DELETE /login/:username
module.exports.deleteUser = function(username) {
    // Mongoose call
}
