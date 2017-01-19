var express = require('express');
var data = require('../controllers/data');

var router = express.Router();

// GET api/data
router.get('/', function(req, res) {
    res.send("User data statistics endpoint");
});

// GET api/data/:username
router.get('/:username', function(req, res) {
    var username = req.params.username;
    data.getData(username, function(err, info) {
        if (user == null) {
            res.send("This user does not exist");
        } else {
            res.send(info);
        }
    });
});

// POST api/data/
router.post('/', function(req, res) {
    data.updateData(req.body, function(err, data) {
        if (err) {
            res.send(err.message);
        } else {
            res.send("User statistics updated!");
        }
    });
});

// PUT api/data/
router.put('/', function(req, res) {
    var newData = req.body;
    data.updateData(newData, function(err, data) {
        if (err) {
            res.send(err.message);
        } else {
            res.send("User statistics updated!");
        }
    });
});

// DELETE api/data/:username
router.delete('/:username', function(req, res) {
    var username = req.params.username;
    data.deleteData(username, callback);
});

module.exports = router;
