angular.module('myApp').factory('LoginService', LoginService);

function LoginService(TokenService, $http) {
	var service = {}
	service.login = login;
    service.isLogged = isLogged;
	return service;

	function login(user) {
        return $http.post('/login', user).then(function (res) {
			TokenService.saveToken(res.data.token);
		});
    }

    function isLogged() {
        if (TokenService.getToken()) return true;
        else return false;
    }

}