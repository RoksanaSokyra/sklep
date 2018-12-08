var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();



require('./app/models/User');
require('./app/models/Item');
require('./app/models/Category');
require('./app/models/Delivery');
require('./app/models/Order');

require('./config/passport-local');

var port = process.env.PORT || 8081; 

mongoose.connect('mongodb://admin:adminadmin123@ds253243.mlab.com:53243/shop'); //podac url 

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));  //?


app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.use(passport.initialize());
app.use(passport.session()); //potrzebe?


require('./app/routes')(app);

app.listen(port);      
console.log('Port: ' + port);

exports = module.exports = app;