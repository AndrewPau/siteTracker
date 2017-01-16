var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var router = express.Router();

var login = require('../models/login');

// Defined authentication strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        login.findOne({username : req.body.username}, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message : "Incorrrect username"});
            }
            bcrypt.compare(req.body.password, user.password, function(err, res) {
                if (err) {
                    return done(err);
                }
                if (!res) {
                    return done(null, false, { message : "Incorrect password"});
                }
                return return(null, user);
            });
        });
    }
));

router.post('/login',
    passport.authenticate('local', {successRedirect : '/coolShitHere',
                                    failureRedirect : '/boringStuff'}), function(req, res) {
                                        // If it goes in here, authentication returned a user
});

var login = require('../models/login');

// Serialize and deserialize the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  login.findById(id, function(err, user) {
    done(err, user);
  });
});
