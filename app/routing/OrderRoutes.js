var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = function (app) {

    app.post('/orders/', function (req, res) {
        var order = new Order();
       // console.log(req.body);
        order.customerId = req.body.customerId;
        order.customerAddress = req.body.address;
        order.items = req.body.cart.items;
        order.paymentMethod = req.body.paymentMethod;
        order.deliveryMethod.title = req.body.deliveryMethod.title;
        order.deliveryMethod.price = req.body.deliveryMethod.price;
        order.save();
        return res.json({
            message: "OK!"
        });
    });
};