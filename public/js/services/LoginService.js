angular.module('myApp').factory('LoginService', LoginService);

function LoginService(TokenService, UserService, $http) {
    var service = {};
	service.login = login;
    service.isLogged = isLogged;
    service.logout = logout;
    service.getStatus = getStatus;
    var status = initStatus();
    return service;

    function getStatus() {
        return status;
    }
    function updateStatus() {
        if (TokenService.getToken()) {status.value = true;}
        else {status.value = false;}
    }
    
	
    function initStatus() {
    	if  (TokenService.getToken()){
    		return {value : true}}
        else {
        	 return {value : false};}
    }

	function login(user) {
        return $http.post('/login', user).then(function (res) {
            TokenService.saveToken(res.data.token);
            updateStatus();
        });
    }

    function logout() {
        TokenService.deleteToken();
        updateStatus();
    }

    function isLogged() {
        if (TokenService.getToken()) return true;
        else return false;
    }

}