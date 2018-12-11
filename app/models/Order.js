var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema(
    {
        customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        customerAddress: {
            name: { type: String, required: true },
            surname: { type: String, required: true },
            street: String,
            number: Number,
            postCode: String,
            city: String,
            country: String
        },
        items: [Array],
        paymentMethod: String,
        deliveryMethod: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
        totalCost: Number,
        delivered: { type: Boolean, default: false }
    }
);

var Order = mongoose.model('Order', orderSchema); 
module.exports = Order; 