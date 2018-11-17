angular.module('myApp').factory('CartService', CartService);

function CartService($http, $window) {
    var service = {}
    service.addToCart = addToCart;
    service.createCart = createCart;
    service.getCart = getCart;

    return service;


    function getCart() {
        return JSON.parse($window.localStorage.getItem('cart'));
    }

    function createCart() {
        var cart = {
            items: [],// [CartItemSchema],
            count: 0,
            summary: 0
        }
        $window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addItemToExistingCart(item) {
        itemAlreadyInCart = false;
        var cart = getCart();
        console.log("count: " + cart.count);
        console.log("summary: " + cart.summary);
        console.log(Array.isArray(cart.items));
        cart.items.forEach(function (i) {
            if (i._id == item._id) {
                itemAlreadyInCart = true;
                i.quantity += 1;
                i.sum += item.price;
            }
        });
        if (itemAlreadyInCart == false) {
            var cartItem = {
                _id: item._id, 
                price: item.price,
                quantity: 1,
                sum: item.price
            }
            cart.items.push(cartItem);
        }
        cart.count += 1; 
        cart.sum += item.price;
        $window.localStorage.setItem('cart', JSON.stringify(cart));
        cart.items.forEach(function (i) {
           
                console.log("items:" + i._id);
            
        });
    }

    function addToCart(item) { 
        if ($window.localStorage.getItem('cart')) {
            addItemToExistingCart(item);
        }
        else {
            createCart();
            addItemToExistingCart(item);
        }

        /*{id: item._id, size: it}*/
        /*$http.post('/add-to-cart', item).then(function (response) { //response.data mozna zamienic n data.data?
            //    return response.data;

        });*/ //przypadek dla zalogowanego uzytkownika
    }
}