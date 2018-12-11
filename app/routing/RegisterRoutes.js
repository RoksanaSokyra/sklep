var mongoose = require('mongoose');
var User = mongoose.model('User');
var validator = require('validator')

module.exports = function (app) {


    app.post('/register', function (req, res) {
        var user = new User();
        if (!validator.isEmail(req.body.email) || validator.isEmpty(req.body.email) ||
            validator.isEmpty(req.body.name) || validator.isEmpty(req.body.surname)) {
            return res.status(400).json({
                message: 'data invalid'
            });
        }
        user.email = req.body.email;
        user.address.name = req.body.name;
        user.address.surname = req.body.surname;
        user.address.street = "";
        user.address.number = null;
        user.address.postCode = "";
        user.address.city = "";
        user.address.country = "";
        user.accessLevel = 0;
        user.setPassword(req.body.password);
        user.save();
        return res.json({
            message: "OK!"
        });
    });
};