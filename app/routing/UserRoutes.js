var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (app) {

    app.get('/users/:id', function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) { console.log("blad"); }
            res.json(user);
        });
    });

    app.put('/users/update/', function (req, res) {
        User.update({ _id: req.body._id }, req.body, { upsert: true }, function (err, user) {
            if (err) { return next(err); }
            res.json(user);
        });
    });

};