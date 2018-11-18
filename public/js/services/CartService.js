angular.module('myApp').factory('CartService', CartService);

function CartService($http, $window) {
    var service = {}
    service.addToCart = addToCart;
    service.createCart = createCart;
    service.getCart = getCart;
    service.addQuantity = addQuantity;
    service.subQuantity = subQuantity;
    service.removeFromCart = removeFromCart;
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

    function increaseItemQuantity(item) {
        var itemIncreased = false;
        cart.items.forEach(function (i) {
            if (i._id == item._id) {
                itemIncreased = true;
                i.quantity += 1;
                i.sum += item.price;
            }
        });
        return itemIncreased;
    }

    function decreaceItemQuantity(item) {
        var itemDecreased = false;
        cart.items.forEach(function (i) {
            if (i._id == item._id && i.quantity > 1) { //czemu jak >=1 to moze byc 0
                itemDecreased= true;
                i.quantity -= 1;
                i.sum -= item.price;
            }
        });
        return itemDecreased;
    }

    function makeNewCartItem(item) {
        var cartItem = {
            _id: item._id,
            title: item.title,
            price: item.price,
            quantity: 1,
            sum: item.price
        }

        console.log(cartItem._id);
        return cartItem;
    }

    function updateCartValues(item, operator) {
        if (operator == 'add') {
            cart.count += 1;
            cart.sum += item.price;
            $window.localStorage.setItem('cart', JSON.stringify(cart));
        }
        else if (operator == 'sub') {
            cart.count -= 1;
            cart.sum -= item.price;
            $window.localStorage.setItem('cart', JSON.stringify(cart));
        }
    }


    function addItemToExistingCart(item) {
       // itemAlreadyInCart = false;
       // console.log(cart);
       // var cart = getCart();
        /*cart.items.forEach(function (i) {
            if (i._id == item._id) {
                itemAlreadyInCart = true;
                i.quantity += 1;
                i.sum += item.price;
            }
        });*/
        //var itemAlreadyInCart = updateItemInCart(item, 'sum');
        
        if (!increaseItemQuantity(item)) {
           /*var cartItem = makeNewCartItem(item); /*{
                _id: item._id, 
                title: item.title,
                price: item.price,
                quantity: 1,
                sum: item.price
            }*/
            cart.items.push(makeNewCartItem(item));
        }
        updateCartValues(item, 'add');
       // cart.count += 1; 
       // cart.sum += item.price;
      //  $window.localStorage.setItem('cart', JSON.stringify(cart));
        
    }

    function addQuantity(item) {
        // updateItemInCart(item, 'add');
        if (increaseItemQuantity(item)) {
            updateCartValues(item, 'add');
        }
        //cart.count += 1;
        //cart.sum += item.price;
        //$window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    function subQuantity(item) {
        if (decreaceItemQuantity(item)) {
            updateCartValues(item, 'sub');
        }
        ///cart.count -= 1;
        //cart.sum -= item.price;
        //$window.localStorage.setItem('cart', JSON.stringify(cart));
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

    function removeFromCart(item) {
        cart.items.forEach(function (i) {
            if (i._id == item._id) {
                cart.count -= i.quantity;
                cart.summary -= i.sum;
                cart.items.splice(cart.items.indexOf(i, 1));
                $window.localStorage.setItem('cart', JSON.stringify(cart));
            }
        });
    }
}