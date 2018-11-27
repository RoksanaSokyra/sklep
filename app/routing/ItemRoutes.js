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
		/*Item.find({title: req.params.parameter}, function (err, items) {
            if (err) { console.log("blad"); }
            res.json(items);
        });*/
		let search = req.params.parameter;
		console.log(req.params.parameter);
		Item.find({ $or: [
			{title: search},
			{category: search}
		]}, function (err, items){
			if (err) { console.log("blad"); }
            res.json(items);
		});
	});
};