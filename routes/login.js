var express = require('express');
var login = require('../controllers/login');

var router = express.Router();

// GET api/login
router.get('/', function(req, res) {
    res.send("Login endpoint");
});

// GET api/login/:username/:password
router.get('/:username/:password', function(req, res) {
    login.getUser(req.params.username, req.params.password, function(err, user) {
        if (err) {
            res.send("No one found!");
        } else if (user == null) { // Do this or throw an error?
            res.sendStatus(404);
        } else {
            res.send(user);
        }
    });
});

// POST api/login
router.post('/', function(req, res) {
    login.createUser(req.body, function(err, user) {
        if (err) {
            res.send("Username is taken. Please choose another.");
        } else {
            res.send("New user created!");
        }
    });
});

module.exports = router;
