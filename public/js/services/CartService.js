angular.module('myApp').factory('CartService', CartService);

function CartService($http, $window) {
    var service = {}
    service.addToCart = addToCart;
    service.createCart = createCart;
    service.getCart = getCart;
    var cart = initCart();//{
       // items: [],// [CartItemSchema],
        //count: 0,
        //summary: 0
    //}
    return service;


    function initCart() {
        if (JSON.parse($window.localStorage.getItem('cart'))) {
            return JSON.parse($window.localStorage.getItem('cart'));
        }
       else  return {items: [], count: 0, summary: 0};
    }
    

    function getCart() {
        return cart;//return JSON.parse($window.localStorage.getItem('cart'));
    }

    function createCart() {
        //var c = {
         //   items: [],// [CartItemSchema],
         //   count: 0,
         //   summary: 0
       // };
        //cart = c;
        $window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addItemToExistingCart(item) {
        itemAlreadyInCart = false;
       // console.log(cart);
       // var cart = getCart();
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
                title: item.title,
                price: item.price,
                quantity: 1,
                sum: item.price
            }
            cart.items.push(cartItem);
        }
        cart.count += 1; 
        cart.sum += item.price;
        $window.localStorage.setItem('cart', JSON.stringify(cart));
        
    }

    function addToCart(item) { 
        //$window.localStorage.removeItem('cart')
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