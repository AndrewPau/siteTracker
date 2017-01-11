var express = require('express');
var login = require('../controllers/login');

var router = express.Router();

// GET api/login
router.get('/', function(req, res) {
    res.send("Login endpoint");
});

// GET api/login/:username
router.get('/:username', function(req, res) {
    login.getUser(req.params.username,  function(err, user) {
        if (err) {
            res.send("No one found!");
        } else if (user == null) {
            res.send("This user does not exist.");
        } else {
            res.send(user.username + " exists!");
        }
    });
});

// PUT api/login/pass
router.put('/pass', function(req, res) {
    login.updatePassword(req.body, function(err, user) {
        if (err || !user) {
            res.send(err.message);
        } else {
            res.send("Profile updated!");
        }
    });
});

// PUT api/login/user
router.put('/user', function(req, res) {
    login.updateUsername(req.body, function(err, user) {
        if (err || !user) {
            res.send(err.message);
        } else {
            res.send("Profile updated!");
        }
    })
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
router.delete('/:username/:password', function(req, res) {
    login.deleteUser(req.params.username, req.params.password, function(err, user) {
        if (err) {
            res.send(err.message);
            // There shouldn't be an error. Db should include signed in user
        } else {
            res.send("User deleted!");
            // Redirect to login page later
        }
    });
})

module.exports = router;
