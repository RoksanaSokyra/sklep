var mongoose = require('mongoose');

var deliverySchema = new mongoose.Schema(
    {
        title: String,
        waitingTime: String,
        price: Number
    }
);

var Delivery = mongoose.model('Delivery', deliverySchema); 
module.exports = Delivery; 