var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (app) {

    app.get('/users/:id', function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) { console.log("blad"); }
            res.json(user);
        });
    });
};