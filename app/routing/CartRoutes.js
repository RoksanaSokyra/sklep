var mongoose = require('mongoose');
var Cart = mongoose.model('Cart');
var CartItem = mongoose.model('CartItem');
var Item = mongoose.model('Item');

module.exports = function (app) {

    app.post('/add-to-cart', function (req, res) {

        /*
        //var item = new Item();
        Cart.findById(req.)
        Item.findById(req.params.id, function (err, result) {
            if (err) { console.log("blad"); }
            return result; //potrzebne?
        }).then(function (result) {

        });
        console.log("blad");
        item.title = req.body.title;
        category.save();*/
        console.log("add to cart console log");
        return res.json({
            message: "OK!"
        });
    });
    
};