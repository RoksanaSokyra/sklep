angular
    .module('myApp')
    .controller('CartController', CartController);

function CartController(CartService, UserService, TokenService, LoginService, $state, toastr) { //cart jako argument
    var vm = this;
    vm.cart = CartService.getCart();
    vm.addQuantity = addQuantity;
    vm.subQuantity = subQuantity;
    vm.removeFromCart = removeFromCart;
    vm.check = check;
    function addQuantity(item) {
        CartService.addQuantity(item);
    }

    function subQuantity(item) {
        CartService.subQuantity(item);
    }
    function removeFromCart(item) {
        CartService.removeFromCart(item);
    }

    function check() {
        var cart = CartService.getCart();
        if ( typeof cart == 'undefined' || cart.items.length == 0) {
            toastr.error('pusty koszyk!', 'koszyk', { closeButton: true, timeOut: 3000 });
        }
        else if (LoginService.isLogged()) {
            UserService.getCurrentUser().then(function (response) {
                if (response.data.address.street != "") {
                    $state.go('shop.checkout.deliveryAndPayment');
                }
                else {
                    $state.go('shop.checkout.address');
                }
            });

        }
        else {
            $state.go("shop.login");
        }
        
    }

}
