angular
    .module('myApp')
    .controller('RegisterController', RegisterController);

function RegisterController(RegisterService, $state) {
    var vm = this;
    vm.user = {
        name: "",
        surname: "",
        email: "",
        password: ""
    };
    vm.register = register;

    function register() {
        RegisterService.register(vm.user);
        $state.go('shop.products');
    }
}