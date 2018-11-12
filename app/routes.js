//var User = require('./models/User');
//var mongoose = require('mongoose');
//var User = mongoose.model('User');
//var passport = require('passport');

module.exports = function (app) {
	

   /* app.get('/', function (req, res) {
        Item.find({}, function (err, items) {
            if (err) { console.log("blad"); }
            console.log('jestem tutaj');
            console.log(items);
            res.json(items);
        });
    });*/
    require('./routing/LoginRoutes')(app);
    require('./routing/RegisterRoutes')(app);
    require('./routing/ItemRoutes')(app);
    require('./routing/CategoryRoutes')(app);

};

//walidacja i odpowiedzi serwera