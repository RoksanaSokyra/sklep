var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({ // or whatever you want to use
    usernameField: 'email',    // define the parameter in req.body that passport can use as username and password
    passwordField: 'password'
},
    function (email, password, done) {
        User.findOne({ email: email}, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect Password' });
            }
           
            return done(null, user, { message: 'logged in' });
        });
    }
));