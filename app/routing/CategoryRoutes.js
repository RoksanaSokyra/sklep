var mongoose = require('mongoose');
var Category = mongoose.model('Category');

module.exports = function (app) {

    app.post('/categories/', function (req, res) {
        var category = new Category();
        category.title = req.body.title;
        category.save();
        return res.json({
            message: "OK!"
        });
    });
    app.get('/categories', function (req, res, next) {
        Category.find({}, function (err, categories) {
            if (err) { next(err); }
            res.json(categories);
        });
    });
};