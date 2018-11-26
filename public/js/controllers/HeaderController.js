angular
    .module('myApp')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, categories, CartService, LoginService, UserService) {//, items) {//, items) {
    var vm = this;
    if (LoginService.isLogged()) {
        vm.user = getUser();
    }
    vm.categories = categories;
    vm.cart = CartService.getCart();
    vm.status = LoginService.getStatus();

    function getUser() {
        UserService.getCurrentUser().then(function (response) {
            vm.user = response.data;
        });
    }

}