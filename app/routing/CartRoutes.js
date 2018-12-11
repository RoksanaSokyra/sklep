var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = function (app) {

    app.post('/add-to-cart', function (req, res) {

        
        return res.json({
            message: "OK!"
        });
    });
    
};