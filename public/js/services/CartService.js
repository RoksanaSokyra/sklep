angular.module('myApp').factory('CartService', CartService);

function CartService($http) {
    var service = {}
    service.addToCart = addToCart;
    //service.putCategory = putCategory;

    return service;

    function addToCart(item) { //drugi argument size
        /*{id: item._id, size: it}*/
        $http.post('/add-to-cart', item).then(function (response) { //response.data mozna zamienic n data.data?
            //    return response.data;

        });

    }
}