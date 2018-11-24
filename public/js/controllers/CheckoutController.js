angular
    .module('myApp')
    .controller('CheckoutController', CheckoutController);

function CheckoutController($state, OrderService, CartService) { //cart jako argument
    var vm = this;
    vm.cart = CartService.getCart();
    vm.order = OrderService.getOrder();
    vm.finalizeCheckout = finalizeCheckout;

    function finalizeCheckout() {
        console.log("finalize");
    }

}