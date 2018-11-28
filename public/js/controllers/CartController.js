angular
    .module('myApp')
    .controller('CartController', CartController);

function CartController(CartService, UserService, TokenService, LoginService, $state) { //cart jako argument
    var vm = this;
    vm.cart = CartService.getCart();
    vm.addQuantity = addQuantity;
    vm.subQuantity = subQuantity;
    vm.removeFromCart = removeFromCart;
    vm.checkIfAddressAdded = checkIfAddressAdded;
    function addQuantity(item) {
        CartService.addQuantity(item);
    }

    function subQuantity(item) {
        CartService.subQuantity(item);
    }
    function removeFromCart(item) {
        CartService.removeFromCart(item);
    }

    function checkIfAddressAdded() {
        if (LoginService.isLogged()) {
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
