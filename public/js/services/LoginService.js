angular.module('myApp').factory('LoginService', LoginService);

function LoginService(TokenService, $http) {
	var service = {}
	service.login = login;
    service.isLogged = isLogged;
	service.logout = logout;
	return service;

	function login(user) {
        return $http.post('/login', user).then(function (res) {
            //console.log(data.token);
            console.log("login service token: " + res.data.token);
			TokenService.saveToken(res.data.token);
		});
    }

    function isLogged() {
        if (TokenService.getToken()) return true;
        else return false;
    }
	
	function logout() {
		console.log("logout");
		TokenService.deleteToken();
	}

}