angular.module('myApp').factory('TokenService', TokenService);

function TokenService($window) {
    var service = {}
    service.saveToken = saveToken;
    service.getToken = getToken;
    service.deleteToken = deleteToken;

    return service;

    function saveToken(token) {
        $window.localStorage.setItem('auth-token', token);
    }
    function getToken() {
        return $window.localStorage.getItem('auth-token');
    }
    function deleteToken() {
        $window.localStorage.removeItem('auth-token');
    }
}