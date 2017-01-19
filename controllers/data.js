var mongoose = require('mongoose');
var data = require('../models/data');

// TODO: Test this with the extension data
// GET data/username
// Use this to get user's site data
module.exports.getData = function(username, callback) {
    data.findOne({username : username}, callback);
}

// PUT data/
// Use this to update/create/delete site statistics
module.exports.updateData = function(stats, callback) {
    var query = {username : stats.username};
    var siteName = stats.site;
    var time = stats.time;
    data.findOne(query, function(err, val) {
        if (!val) {
            console.log("Creds");
            error = new UserException("This user does not have a data profile.");
            callback(error, val);
        } else {
            var containsSite = false;
            for (var site in val.sites) {
                if (siteName == site[0]) {
                    containsSite = true;
                    site[1] = time;
                    break;
                }
            }
            if (!containsSite) {
                val.sites.push({site : siteName, time : time});
            }
            val.save(callback);
        }
    });
}

// POST data/:stats
// Use this to initialize a new user
module.exports.createData = function(stats, callback) {
    data.create({username : stats.username, totalTime : 0, sites : []}, callback);
}

// DELETE data/:username
// Use this to delete all of a user's data
module.exports.deleteData = function(username, callback) {
    data.remove({username : username}, callback);
}

// Error message to throw when credentials are incorrect
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
