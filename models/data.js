var mongoose = require('mongoose');

var dataSchema = mongoose.Schema({
    username : String,
    totalTime : Number,
    sites : [{
        site : String,
        time : Number
    }]
});

module.exports = mongoose.model('Data', dataSchema);
