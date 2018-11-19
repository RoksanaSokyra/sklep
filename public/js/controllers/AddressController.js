angular
    .module('myApp')
    .controller('AddressController', AddressController);

function AddressController($state, OrderService) { //cart jako argument
    var vm = this;
    vm.address = {
        name: "",
        surname: "",
        street: "",
        number: null,
        postCode: "",
        city: "",
        country:""
    };
    vm.addAddress = addAddress;

    function addAddress() {
        OrderService.addAddress(vm.address);
        $state.go('shop.deliveryAndPayment');
    }

}