//var User = require('./models/User');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

module.exports = function (app) {

    app.post('/login', function (req, res, next) {
        passport.authenticate('local', function (err, user, done) {
            if (err || !user) {
                return res.status(403).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            return res.json({ token: user.generateJWT() });
        })(req, res, next);
    });

};

//walidacja i odpowiedzi serwera