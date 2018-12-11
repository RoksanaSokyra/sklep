var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema(
    {
        title: String
    }
);

var Category = mongoose.model('Category', categorySchema); 
module.exports = Category; 