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
		$state.go("shop");
		console.log("1");
		UserService.updateUserAddress(vm.user).then(function (res) {
			vm.user = getUser();
		});
    }

    function logout() {
		console.log("test");
        LoginService.logout();
        CartService.emptyCart();
        
        $state.go("shop");
    }
}