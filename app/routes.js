
module.exports = function (app) {

    require('./routing/DeliveryRoutes')(app);
    require('./routing/LoginRoutes')(app);
    require('./routing/CartRoutes')(app);
    require('./routing/RegisterRoutes')(app);
    require('./routing/ItemRoutes')(app);
    require('./routing/CategoryRoutes')(app);
    require('./routing/UserRoutes')(app);

};

//walidacja i odpowiedzi serwera