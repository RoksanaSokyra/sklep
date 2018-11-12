angular.module('myApp').factory('LoginService', LoginService);

function LoginService(TokenService, $http) {
	var service = {}
	service.login = login;

	return service;

	function login(user) {
        return $http.post('/login', user).then(function(data){
		TokenService.saveToken(data.token);
		});
	}
}