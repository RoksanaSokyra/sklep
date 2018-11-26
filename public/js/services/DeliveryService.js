angular.module('myApp').factory('DeliveryService', DeliveryService);

function DeliveryService($http) {
    var service = {}
    service.putDelivery = putDelivery;
    service.getDeliveries = getDeliveries;
    return service;

    function putDelivery(delivery) {
        return $http.post('/deliveries/', delivery); //czy drugi ukosnik potrzebny
    }

    function getDeliveries() {
        return $http.get('/delivieries').then(function (response) { //response.data mozna zamienic n data.data?
            return response.data;
        });
    }


}