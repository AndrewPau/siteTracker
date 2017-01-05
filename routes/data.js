var express = require('express');
var data = require('../controllers/data');

var router = express.Router();

router.get('/:username', function(req, res) {
    var username = req.params.username;
    data.getData(username, function() {

    });
});

router.post('/:username', function(req, res) {
    var newData = req.body;
});

module.exports = router;
