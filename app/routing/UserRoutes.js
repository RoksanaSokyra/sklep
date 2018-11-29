var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (app) {

    app.get('/users/:id', function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) { console.log("blad"); }
            res.json(user);
        });
    });
	app.post('/users/:id&:address', function (req, res) {
		console.log("3");
		console.log(req.params.id + "  " +  req.params.address);
		User.findById(req.params.id, function (err, user){
			if (err) { console.log("blad"); }
			user.address = req.params.address;
			user.save();
			res.json({
				message: "OK!"
			});
		});
	});
};