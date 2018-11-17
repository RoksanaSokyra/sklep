angular
    .module('myApp')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, categories, CartService) {//, items) {//, items) {
    var vm = this;
    vm.categories = categories;
    vm.cart = CartService.getCart();

}