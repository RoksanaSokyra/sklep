var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = function (app) {

    app.post('/items/', function (req, res) {
        var item = new Item();
        item.title = req.body.title;
        item.description = req.body.description;
        item.size = req.body.size;
        item.category = req.body.category;
        item.price = req.body.price;
        item.imageIndex = req.body.index;
        item.quantity = req.body.quantity;
        item.save();
        return res.json({
            message: "OK!"
        });
    });
    app.get('/items', function (req, res) {
        console.log('kurwa');
        Item.find({}, function (err, items) {
            if (err) { console.log("blad"); }
            console.log(items);
            res.json(items);
        });
    });

};