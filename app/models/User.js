var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    hash: String,
    salt: String,
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
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        id: this._id,
        email: this.email,
        exp: parseInt(exp.getTime() / 1000)
    }, 'secret');//process.env.JWT_SECRET);//"secret");//process.env.JWT_SECRET);
};

var User = mongoose.model('User', userSchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = User; //esport modelu