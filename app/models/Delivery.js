var mongoose = require('mongoose');

var deliverySchema = new mongoose.Schema({
    title: String,
    discription: String
});

var Delivery = mongoose.model('Delivery', deliverySchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = Delivery; //esport modelu