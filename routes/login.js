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

// DELETE api/login
router.delete('/:username', function(req, res) {
    login.deleteUser(res.params.username, function(err, user) {
        if (err) {
            res.send(err);
            // There shouldn't be an error. Db should include signed in user
        } else {
            res.send("User deleted!");
            // Redirect to login page later
        }
    });
})

// PUT api/login/pass
router.put('/pass', function(req, res) {
    login.updatePassword(req.body, function(err, user) {
        if (err || !user) {
            res.send("The credentials were not found. Please enter them again.");
        } else {
            res.send("Profile updated!");
        }
    });
});

// PUT api/login/user
router.put('/user', function(req, res) {
    login.updateUsername(req.body, function(err, user) {
        if (err || !user) {
            res.send(err);
        } else {
            res.send("Profile updated!");
        }
    })
});

module.exports = router;
