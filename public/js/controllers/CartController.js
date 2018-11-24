angular
    .module('myApp')
    .controller('CartController', CartController);

function CartController(CartService, $state) { //cart jako argument
    var vm = this;
    vm.cart = CartService.getCart();
    vm.addQuantity = addQuantity;
    vm.subQuantity = subQuantity;
    vm.removeFromCart = removeFromCart;

    function addQuantity(item) {
        CartService.addQuantity(item);
    }

    function subQuantity(item) {
        CartService.subQuantity(item);
    }
    function removeFromCart(item) {
        CartService.removeFromCart(item);
    }

}