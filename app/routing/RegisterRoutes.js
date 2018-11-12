//var User = require('./models/User');
var mongoose = require('mongoose');
var User = mongoose.model('User');
//var passport = require('passport');

module.exports = function (app) {


    app.post('/register', function (req, res) {
        var user = new User();
        user.email = req.body.email;
        user.address.name = req.body.name;
        user.address.surname = req.body.surname;
        user.setPassword(req.body.password);
        user.save();
        return res.json({
            message: "OK!"
        });
    });
    /*app.post('/login', function (req, res, next) {
        console.log('a');
        passport.authenticate('local', function (err, user, done) {
            if (err || !user) {
                console.log(err);
                console.log(user);
                console.log(done);
                return res.status(400).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            return res.json({ token: user.generateJWT() });
        })(req, res, next);
    });*/
    /*app.get('/post', function (req, res,next) {
        console.log('a');
        passport.authenticate('local', function (err, user, done) {
            if (err || !user) {
                console.log(err);
                console.log(user);
                console.log(done);
                return res.status(400).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            return res.json({ token: user.generateJWT() });
        })(req, res, next);
    });*/

};

//walidacja i odpowiedzi serwera