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
        item.date = new Date;
        item.save();
        return res.json({
            message: "OK!"
        });
    });
    app.get('/items', function (req, res) {
        Item.find({}, function (err, items) {
            if (err) { console.log("blad"); }
            res.json(items);
        });
    });
    app.get('/items/:id', function (req, res) {
        Item.findById(req.params.id, function (err, item) {
            if (err) { console.log("blad tutej"); }
            res.json(item);
        });
    });
    app.get('/category-items/:category', function (req, res) {
        Item.find({category: req.params.category}, function (err, items) {
            if (err) { console.log("blad"); }
            res.json(items);
        });
    });
    app.get('/item_search/:parameter', function (req, res) {

        let search = req.params.parameter;
        console.log(req.params.parameter);
        Item.find({
            $or: [
                { title: new RegExp(search, "i") },
                { category: new RegExp(search, "i") }
            ]
        }, function (err, items) {
            if (err) { console.log("blad"); }
            res.json(items);
        });
    });
    /*app.get('/item-quantity', function (req, res) {
        console.log(req.query.size);
        console.log(req.query.quantity);
        console.log(req.query.id);
        Item.findById(req.query.id, function (err, item) {
            console.log(item.stock);
            item.stock.forEach(function (a) {
                if (a.size == req.query.size && a.quantity < req.query.quantity) {
                    return res.json({
                        error: "1",
                        message: "brak produktow w magazynie",
                        availableQuantity: a.quantity
                    })
                }
            }
            )
        });
        return res.json({
            message: "OK!"
        })
    });*/
};