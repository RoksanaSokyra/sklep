angular.module('myApp').factory('UserService', UserService);


function UserService(TokenService, $http, $window) {
    var service = {}
    service.getCurrentUser = getCurrentUser;
    service.updateUserAddress = updateUserAddress;
    return service;

    function getCurrentUser() {
        var token = $window.localStorage.getItem('auth-token');
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return $http.get('users/' + payload.id).then(function (response) {
            return response;
        });
    }
    function updateUserAddress(user) {
		console.log("2");
		let id = getCurrentUser();
		console.log('/users/' + id + '&' + user.address);
		return $http.post('/users/' + id + '&' + user.address).then(function (res) {
			return res;
		});
    }

}