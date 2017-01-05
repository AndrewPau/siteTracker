var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('login', loginSchema);
