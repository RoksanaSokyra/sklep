angular.module('myApp').factory('DateService', DateService);

function DateService($http) {
    var service = {}
    service.calculateDiff = calculateDiff;

    return service;

    function calculateDiff(date) {
        return (moment(new Date()).diff(moment(date), 'days'));
    }

}