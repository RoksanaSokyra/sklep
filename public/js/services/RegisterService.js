angular.module('myApp').factory('RegisterService', RegisterService);

function RegisterService($http) {
    var service = {}
    service.register = register;

    return service;

    function register(user){
        $http.post('/register', user);
        }
}