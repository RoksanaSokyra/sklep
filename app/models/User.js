var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema(
    {
    email: { type: String, required: true, unique: true },
    hash: String,
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
    this.hash = bcrypt.hashSync(password, 10);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.hash);
};

userSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        id: this._id,
       // email: this.email ??
        exp: parseInt(exp.getTime() / 1000)
    }, 'secret');//process.env.JWT_SECRET);//"secret");//process.env.JWT_SECRET);
};

var User = mongoose.model('User', userSchema); //trzeba utwoezyc model dla shcematu bo na razie jest bezuzyteczny
module.exports = User; //esport modelu
