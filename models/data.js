var mongoose = require('mongoose');

// TODO: Fill out how you want to store all of the data
var dataSchema = mongoose.Schema({
    username: String,
    totalTime: Number
});

module.exports = mongoose.model('Data', dataSchema);
