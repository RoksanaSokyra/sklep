angular.module('myApp').factory('UserService', UserService);


function UserService(TokenService, $http, $window) {
    var service = {}
    service.getCurrentUser = getCurrentUser;
    return service;

    function getCurrentUser() {
        var token = $window.localStorage.getItem('auth-token');
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return $http.get('users/' + payload.id).then(function (response) {
            return response;
        });
        
    }

}