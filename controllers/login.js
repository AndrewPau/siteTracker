var mongoose = require('mongoose');
var login = require('../models/login');

// PUT login/user/
// Use this to change a profile's username
module.exports.updateUsername = function(user, callback) {
    var query = {username : user.oldUsername, password : user.password};
    var error;
    login.findOne(query, function(err, val) {
        if (!val) {
            error = new UserException("The credentials are incorrect.");
            callback(error, val);
        } else {
            findOne({username : user.newUsername}, function(err, check) {
                if (!check) {
                    val.username = user.newUsername;
                    val.save(callback);
                } else {
                    error = new UserException("The username is already taken");
                    callback(error, val);
                }
            });
        }
    });
}

// PUT login/pass/
// Use this to change a profile's password
module.exports.updatePassword = function(user) {
    var query = {username : user.username, password : user.oldPassword};
    var update = {username: user.username, password : user.newPassword};
    var options = {new: true};
    login.findOneAndUpdate(query, update, options, callback);
}

// Error to throw when a username is already taken.
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

// Use this to create a new profile
module.exports.createUser = function(user, callback) {
    login.findOne({username : user.username}, function(err, val) {
        if (val) {
            var error = new UserException("This username is already taken");
            callback(error, val);
        } else {
            login.create({username : user.username, password: user.pass}, callback);
        }
    });
}

// GET /login/:username/:password
module.exports.getUser = function(user, pass, callback) {
    login.findOne({username : user, password : pass}, callback)
}

// DELETE /login/ Delete user login credentials and all user info
// Sign out user afterwards
module.exports.deleteUser = function(username) {
    login.findOneAndRemove({username : user.username}, function(err, val) {
        if (!val) { // Delete later once tested
            var error = new UserException("This username does not exist");
            callback(error, val);
        } else {
            // delete user info here, make a call to api/data route
            login.create({username : user.username, password: user.pass}, callback);
        }
    });
}
