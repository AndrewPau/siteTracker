var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
    // Integrate this when we want to have unique emails
    // and decide to add email authentication
    // email : {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    username: String,
    password: String
});

module.exports = mongoose.model('login', loginSchema);
