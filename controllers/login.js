var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var login = require('../models/login');

const saltRounds = 10;

// GET /login/:username/
module.exports.getUser = function(user, callback) {
    login.findOne({username : user}, callback);
}

// PUT login/user/
// Use this to change a profile's username
module.exports.updateUsername = function(user, callback) {
    var query = {username : user.oldUsername};
    var error;
    login.findOne(query, function(err, val) {
        if (!val) {
            error = new UserException("This user does not exist.");
            callback(error, val);
        } else {
            login.findOne({username : user.newUsername}, function(err, check) {
                if (check) {
                    error = new UserException("This username is already taken.");
                    callback(error, val);
                } else {
                    bcrypt.compare(user.password, val.password, function(err, res) {
                        if (!res) {
                            error = new UserException("The password is incorrect.");
                            callback(error, val);
                        } else {
                            val.username = user.newUsername;
                            val.save(callback);
                        }
                    });
                }
            });
        }
    });
}

// PUT login/pass/
// Use this to change a profile's password
module.exports.updatePassword = function(user, callback) {
    var query = {username : user.username};
    var error;
    login.findOne(query, function(err, val) {
        if (!val) {
            error = new UserException("This user does not exist");
            callback(error, val);
        } else {
            bcrypt.compare(user.oldPassword, val.password, function(err, res) {
                if (!res) {
                    error = new UserException("The password is incorrect.");
                    callback(error, val);
                } else {
                    bcrypt.hash(user.newPassword, saltRounds, function(err, hash) {
                        val.password = hash;
                        val.save(callback);
                    });
                }
            });
        }
    });
}

// POST login/
// Use this to create a new profile
module.exports.createUser = function(user, callback) {
    var query = {username : user.username};
    login.findOne(query, function(err, val) {
        if (val) {
            var error = new UserException("This username is already taken");
            callback(error, val);
        } else {
            bcrypt.hash(user.password, saltRounds, function(err, hash) {
                login.create({username : user.username, password: hash}, callback);
            });
        }
    });
}

// DELETE /login/ Delete user login credentials and all user info
// Sign out user afterwards
module.exports.deleteUser = function(user, callback) {
    var query = {username : user.username};
    login.findOne(query, function(err, val) {
        if (!val) { // Delete later once tested
            var error = new UserException("This user does not exist");
            callback(error, val);
        } else {
            bcrypt.compare(user.password, val.password, function(err, res) {
                if (!res) {
                    error = new UserException("The password is incorrect.");
                    callback(error, val);
                } else {
                    // Delete user info from data collection here
                    login.remove(query, callback);
                }
            });
        }
    });
}

// Error message to throw when credentials are incorrect
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
