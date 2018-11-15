/*var mongoose = require('mongoose');

var cartItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    //image: Array,
    quantity: Number,
    sum: Number //price * count
});


cartItemSchema.methods.calculateTotalSum = function () {
    sum = price * quantity;
    this.save();
    //return sum;
}

var CartItem = mongoose.model('CartItem', cartItemSchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = CartItem; //esport modelu*/