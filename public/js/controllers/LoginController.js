angular
    .module('myApp')
    .controller('LoginController', LoginController);

function LoginController(LoginService, $state) {
    var vm = this;
    vm.user = {
        email: "",
        password: ""
    };
    vm.login = login;

    function login() {
        LoginService.login(vm.user);
        $state.go('shop.main');
    }
}