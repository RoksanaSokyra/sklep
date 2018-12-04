angular
    .module('myApp')
    .controller('LoginController', LoginController);

function LoginController(LoginService, $state, toastr) {
    var vm = this;
    vm.user = {
        email: "",
        password: ""
    };
    vm.login = login;

    function login() {
        var x = LoginService.login(vm.user).then(function (res) {
            $state.go('shop');
        }).catch(function (err) {
            toastr.error('nieprawidlowe dane', 'logowanie', { closeButton: true, timeOut: 3000 });
        });
    }
}