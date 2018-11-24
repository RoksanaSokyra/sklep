angular
    .module('myApp')
    .controller('DeliveryAndPaymentController', DeliveryAndPaymentController);

function DeliveryAndPaymentController($state, OrderService) { //cart jako argument
    var vm = this;
    vm.payment = "";
    vm.delivery = "";
    vm.isAddressAdded = isAddressAdded();
    vm.addDeliveryAndPayment = addDeliveryAndPayment;

    function isAddressAdded() {
        if (!OrderService.isAddressAdded()) {
            $state.go('shop.address');
        }
    }

    function addDeliveryAndPayment() {
        console.log("tutaj w delivery");
        OrderService.addDeliveryAndPayment(vm.payment, vm.delivery);
        $state.go('shop.checkout');
    }

}