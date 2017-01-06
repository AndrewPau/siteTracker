var express = require('express');
var login = require('../controllers/login');

var router = express.Router();

// GET api/login
router.get('/', function(req, res) {
    res.send("Login endpoint");
});

// GET api/login/:username
router.get('/:username', function(req, res) {
    var username = req.params.username;
    login.getData(username, function() {

    });
});

module.exports = router;
