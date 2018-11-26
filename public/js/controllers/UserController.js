angular
    .module('myApp')
    .controller('UserController', UserController);

function UserController($scope,  LoginService, UserService, CartService, $state) {//, items) {//, items) {
    var vm = this;
    if (LoginService.isLogged()) {
        vm.user = getUser();
    }
    else { $state.go("login"); }

    vm.updateAddress = updateAddress;
    vm.logout = logout;

    function getUser() {
        UserService.getCurrentUser().then(function (response) {
            vm.user = response.data;
        });
    }

    function updateAddress() {

    }

    function logout() {
        LoginService.logout();
        CartService.emptyCart();
        $state.go("shop");
    }
}