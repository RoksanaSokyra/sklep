angular.module('myApp').factory('ItemService', ItemService);

function ItemService($http) {
    var service = {}
    service.getItems = getItems;
    //service.putItem = putItem;

    return service;

    function getItems() {
        return $http.get('/items').then(function (response) { //response.data mozna zamienic n data.data?
            return response.data;
        });
    }
    //function putItem(item) {
     //   return $http.post('/items/', item); //czy drugi ukosnik potrzebny
   // }

}