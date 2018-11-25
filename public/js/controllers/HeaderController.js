angular
    .module('myApp')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, categories, CartService, LoginService, UserService) {//, items) {//, items) {
    console.log("Header Controler");
	var vm = this;
    if (LoginService.isLogged()) {
        vm.user = getUser();
    }
    vm.categories = categories;
    vm.cart = CartService.getCart();
    //vm.user = UserService.getCurrentUser()
    vm.isLogged = LoginService.isLogged(); //czy funkcja normalnie
	vm.logout = LoginService.logout();

    function getUser() {
        UserService.getCurrentUser().then(function (response) {
            vm.user = response.data;
        });
    }

}