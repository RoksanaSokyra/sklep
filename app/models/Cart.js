var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    items:[],// [CartItemSchema],
    count: Number,
    summary: Number
});
/*
cartSchema.addItem = function (item) {
    itemAlreadyInCart = false;
    items.forEach(function (i) {
        if (i._id == item._id) {
            itemAlreadyInCart = true;
            i.quantity += item.quantity; //+= 1
        }
    })
    if (itemAlreadyInCart == false) {
        items.push(item);
    }
    count += item.quantity; //+=1
    //summary += item.i.calculateTotalSum();
    this.save();
}

cartSchema.deleteItem = function (item) {
    items.forEach(function (i) {
        if (i._id == item._id) {
            i.quantity -= item.quantity; //+= 1
            if (i.quantity < 0) {
                items.pull(i);
            }
        }
        count -= item.quantity;
        summary -= item.i.calculateTotalSum();
    })
    this.save();
}

*/
var Cart = mongoose.model('Cart', cartSchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = Cart; //esport modelu