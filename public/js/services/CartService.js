angular.module('myApp').factory('CartService', CartService);

function CartService($http, $window) {
    var service = {}
    service.addToCart = addToCart;
    service.createCart = createCart;
    service.getCart = getCart;
    service.addQuantity = addQuantity;
    service.subQuantity = subQuantity;
    service.removeFromCart = removeFromCart;
    service.emptyCart = emptyCart;
    var cart = initCart();
    return service;


    function initCart() {
        if (JSON.parse($window.localStorage.getItem('cart'))) {
            return JSON.parse($window.localStorage.getItem('cart'));
        }
       else  return {items: [], count: 0, summary: 0};
    }
    

    function getCart() {
        return cart;
    }

    function createCart() {
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
            images: item.images,
            imageIndex: item.imageIndex,
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
        
        if (!increaseItemQuantity(item)) {
           cart.items.push(makeNewCartItem(item));
        }
        updateCartValues(item, 'add');
             
    }

    function addQuantity(item) {
        if (increaseItemQuantity(item)) {
            updateCartValues(item, 'add');
        }  }

    function subQuantity(item) {
        if (decreaceItemQuantity(item)) {
            updateCartValues(item, 'sub');
        }
     }

    function addToCart(item) { 
        if ($window.localStorage.getItem('cart')) {
            addItemToExistingCart(item);
        }
        else {
            createCart();
            addItemToExistingCart(item);
        }

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
    function emptyCart() {
        cart.items.splice(0, cart.items.length);
        $window.localStorage.setItem('cart', JSON.stringify(cart));
    }
}