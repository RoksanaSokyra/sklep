angular
    .module('myApp')
    .controller('UserPannelController', UserPannelController);
function UserPannelController($scope,  LoginService, UserService, CartService, $state) {//, items) {//, items) {
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
        UserService.updateUserAddress(vm.user).then(function (res) {
            vm.user = getUser();
        });
        $state.go("shop.userPannel.data");
    }

     function logout() {
        LoginService.logout();
        CartService.emptyCart();
        $state.go("shop");
    }
} 