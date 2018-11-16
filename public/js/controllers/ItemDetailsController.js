angular
    .module('myApp')
    .controller('ItemDetailsController', ItemDetailsController);

function ItemDetailsController(item, $state, CartService) {//, items) {//, items) {
    var vm = this;
    vm.item = item;
   vm.addToCart = addToCart;

    function addToCart() {
        CartService.addToCart(item); //size
    }


}