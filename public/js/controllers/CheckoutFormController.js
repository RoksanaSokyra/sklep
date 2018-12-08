angular
    .module('myApp')
    .controller('CheckoutFormController', CheckoutFormController);

function CheckoutFormController($state, OrderService, CartService, LoginService, UserService, delivery) { //cart jako argument
    var vm = this;
    vm.cart = CartService.getCart();
    vm.isLogged = isLogged();
    vm.address = isAddressAdded();
    vm.paymentMethod = "platnosc przy odbiorze";
    vm.deliveryOptions = delivery;
    vm.delivery = "";
    vm.finalizeCheckout = finalizeCheckout;

    function isLogged() {
        if (!LoginService.isLogged()) {
            $state.go("login");
        }
    }
    function isAddressAdded() {
        UserService.getCurrentUser().then(function (response) {
            vm.address = response.data.address;
            if (response.data.address.street != "") {
                $state.go('shop.checkout.deliveryAndPayment');
            }
            else {
                $state.go('shop.checkout.address');
            }
        });
    }

    function finalizeCheckout() {
        UserService.getCurrentUser().then(function (response) {
            var userId = response.data._id;
            OrderService.addOrder(userId, vm.cart, vm.address, vm.paymentMethod, vm.delivery);
            });
            }
}