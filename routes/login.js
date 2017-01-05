var express = require('express');
var login = require('../controllers/login');

var router = express.Router();

router.get('/:username', function(req, res) {
    var username = req.params.username;
    login.getData(username, function() {

    });
})

module.exports = router;
