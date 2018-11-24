var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    title: String
});

var Category = mongoose.model('Category', categorySchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = Category; //esport modelu