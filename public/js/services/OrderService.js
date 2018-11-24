angular.module('myApp').factory('OrderService', OrderService);

function OrderService($http, $window) {
    var service = {};
    var order = {
        address: {
            name: "",
            surname: "",
            street: "",
            number: null,
            postCode: "",
            city: "",
            country: ""
        },
        delivery: "",
        payment: ""
    };
    service.addAddress = addAddress;
    service.isAddressAdded = isAddressAdded;
    service.addDeliveryAndPayment = addDeliveryAndPayment;
    service.getCartAddress = getCartAddress;
    service.getOrder = getOrder;
    return service;

    function getOrder() {
        return order;
    }

    function addAddress(address) {
        order.address = address;
        console.log("added address: " + order.address.name);
    }
    function isAddressAdded() {
        if (order.address.street != "") {
            return true;
        }
        else return false;
    }
    function addDeliveryAndPayment(delivery, payment) {
        order.delivery = delivery;
        order.payment = payment;
    }

    function getCartAddress() {
        return order.address.name;
    }
}