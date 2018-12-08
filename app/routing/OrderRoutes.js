var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Item = mongoose.model('Item');

module.exports = function (app) {

    app.post('/orders/', function (req, res) {
        var order = new Order();
        order.customerId = req.body.customerId;
        order.customerAddress = req.body.address;
        order.items = req.body.cart.items;
        order.paymentMethod = req.body.paymentMethod;
        order.deliveryMethod = req.body.deliveryMethod._id;
        order.save();
        req.body.cart.items.forEach(function (i) {
            Item.update({ _id: i._id, "stock.size": i.size }, { $inc: {"stock.$.quantity" : -i.quantity} }, { upsert: true }, function (err, item) {
                if (err) { console.log("error"); }
            });
        })
        return res.json({
            message: "OK!"
        });
    });
};