var mongoose = require('mongoose');
var Delivery = mongoose.model('Delivery');

module.exports = function (app) {

    app.post('/deliveries/', function (req, res) {
        var delivery = new Delivery();
        delivery.title = req.body.title;
        delivery.description = req.body.description;
        delivery.price = req.body.price;
        delivery.save();
        return res.json({
            message: "OK!"
        });
    });
    app.get('/delivieries', function (req, res) {
        Delivery.find({}, function (err, delivieries) {
            if (err) { console.log("blad"); }
            res.json(delivieries);
        });
    });
};