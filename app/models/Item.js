var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    title: String,
    discription: String,
    stock: [{ size: Number, quantity: Number}],
    category: String,
    price: Number,
    images: Array,
    imageIndex: Number
});

var Item = mongoose.model('Item', itemSchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = Item; //esport modelu