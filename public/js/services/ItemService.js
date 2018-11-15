angular.module('myApp').factory('ItemService', ItemService);

function ItemService($http) {
    var service = {}
    service.getItems = getItems;
    service.getItem = getItem;
    service.putItem = putItem;

    return service;

    function getItems() {
        return $http.get('/items').then(function (response) { //response.data mozna zamienic n data.data?
            return response.data;
        });
    }
    function getItem(id) {
        console.log('chujek');
        return $http.get('items/' + id).then(function (response) {
            console.log(response.data);
            return response.data;
        });
      //  return 'b';
    }

    function putItem(item) {
        return $http.post('/items/', item); //czy drugi ukosnik potrzebny
    }

}