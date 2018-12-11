angular.module('myApp').factory('CategoryService', CategoryService);

function CategoryService($http) {
    var service = {}
    service.getCategories = getCategories ;
    service.putCategory = putCategory;

    return service;

    function getCategories () {
        return $http.get('/categories').then(function (response) { 
            return response.data;
        });
    }
    function putCategory(category) {
      return $http.post('/categories/', category); 
     }

}