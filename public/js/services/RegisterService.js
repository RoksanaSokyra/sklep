angular.module('myApp').factory('RegisterService', RegisterService);

function RegisterService($http, toastr) {
    var service = {}
    service.register = register;

    return service;

    function register(user){
        $http.post('/register', user).then(function (response) {
            toastr.success('zarejestrowano', 'rejestracja', { closeButton: true, timeOut: 3000 });
        });
        }
}