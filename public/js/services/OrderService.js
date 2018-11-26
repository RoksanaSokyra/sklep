angular.module('myApp').factory('OrderService', OrderService);

function OrderService($http, $window) {
    var service = {};
    service.addOrder = addOrder;
    return service;
    function addOrder(customerId, cart, address, paymentMethod, deliveryMethod) {
        return $http.post('/orders/', { customerId, address, cart, paymentMethod, deliveryMethod }); //czy drugi ukosnik potrzebny
    }
}