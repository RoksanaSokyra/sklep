angular.module('myApp').factory('ItemService', ItemService);

function ItemService($http) {
    var service = {}
    service.getItems = getItems;
    service.getItem = getItem;
    service.putItem = putItem;
    service.getItemByCategory = getItemByCategory;
	service.getSearchItems = getSearchItems;

    return service;

    function getItems() {
        return $http.get('/items').then(function (response) { //response.data mozna zamienic n data.data?
            return response.data;
        });
    }
    function getItem(id) {
        return $http.get('items/' + id).then(function (response) {
            console.log(response.data);
            return response.data;
        });
    }

    function putItem(item) {
        return $http.post('/items/', item); //czy drugi ukosnik potrzebny
    }

    function getItemByCategory(category) {
        return $http.get('category-items/' + category).then(function (response) {
            console.log(response.data);
            return response.data;
        })
    }
	function getSearchItems(parameter){
		return $http.get('/item_search/' + parameter).then(function (response) {
            console.log(response.data);
            return response.data;
        })
	}
}