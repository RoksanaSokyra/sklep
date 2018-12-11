var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: String,
        accessLevel: { type: Number, default: 0 },
        address: {
            name: { type: String, required: true },
            surname: { type: String, required: true },
            street: String,
            number: Number,
            postCode: String,
            city: String,
            country: String
        },
        phone: Number
    }
);

userSchema.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, 10);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        id: this._id,
        exp: parseInt(exp.getTime() / 1000)
    }, 'secret');
};

var User = mongoose.model('User', userSchema);
module.exports = User;
