angular.module('myApp').factory('DeliveryService', DeliveryService);

function DeliveryService($http) {
    var service = {}
    service.putDelivery = putDelivery;
    service.getDeliveries = getDeliveries;
    return service;

    function putDelivery(delivery) {
        return $http.post('/deliveries/', delivery); 
    }

    function getDeliveries() {
        return $http.get('/delivieries').then(function (response) { 
            return response.data;
        });
    }


}