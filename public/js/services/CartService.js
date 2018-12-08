angular.module('myApp').factory('CartService', CartService);

function CartService($http, $window, toastr) {
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

    function increaseItemQuantity(item, size) {
        var itemIncreased = false;
        cart.items.forEach(function (i) {
            if (i._id == item._id && i.size == size && i.quantity < i.availableQuantity) {
                itemIncreased = true;
                i.quantity += 1;
                i.sum += item.price;
            }
            else if (i._id == item._id && i.size == size && i.quantity >= i.availableQuantity) {
                toastr.error('brak produktu w magazynie', 'koszyk', { closeButton: true, timeOut: 3000 });
            }
        });
        return itemIncreased;
    }

    function decreaceItemQuantity(item, size) {
        var itemDecreased = false;
        cart.items.forEach(function (i) {
            if (i._id == item._id && i.size == size && i.quantity > 1) { //czemu jak >=1 to moze byc 0
                itemDecreased= true;
                i.quantity -= 1;
                i.sum -= item.price;
            }
        });
        return itemDecreased;
    }

    function makeNewCartItem(item, size) {
        var quantityInStock = 0;
        item.stock.forEach(function (i){
            if (i.size == size) {
                quantityInStock = i.quantity;
            }
        });
        var cartItem = {
            _id: item._id,
            title: item.title,
            images: item.images,
            imageIndex: item.imageIndex,
            size: size,
            price: item.price,
            quantity: 1,
            sum: item.price,
            availableQuantity: quantityInStock
        }
        
        return cartItem;
    }

    function updateCartValues(item, operator) {
        if (operator == 'add') {
            cart.count += 1;
            cart.summary += item.price;
            $window.localStorage.setItem('cart', JSON.stringify(cart));
        }
        else if (operator == 'sub') {
            cart.count -= 1;
            cart.summary -= item.price;
            $window.localStorage.setItem('cart', JSON.stringify(cart));
        }
    }


    function addItemToExistingCart(item, size) {
        
        if (!increaseItemQuantity(item, size)) {
           cart.items.push(makeNewCartItem(item, size));
        }
        updateCartValues(item, 'add');
             
    }

    function addQuantity(item) {
        if (increaseItemQuantity(item, item.size)) {
            updateCartValues(item, 'add');
        }  }

    function subQuantity(item) {
        if (decreaceItemQuantity(item, item.size)) {
            updateCartValues(item, 'sub');
        }
     }

    function addToCart(item, size) { 
        toastr.success('dodano do koszyka', 'koszyk', { closeButton: true, timeOut: 3000 });
        if ($window.localStorage.getItem('cart')) {
            addItemToExistingCart(item, size);
        }
        else {
            createCart();
            addItemToExistingCart(item, size);
        }

    }

    function removeFromCart(item) {
        cart.items.forEach(function (i) {
            console.log("item and size compare: " + i.size + " " + item.size);
            if (i._id == item._id && i.size == item.size) {
                cart.count -= i.quantity;
                cart.summary -= i.sum;
                cart.items.splice(cart.items.indexOf(i), 1);
                $window.localStorage.setItem('cart', JSON.stringify(cart));
            }
        });
    }
    function emptyCart() {
        cart.count = 0;
        cart.summary = 0;
        cart.items.splice(0, cart.items.length);
        $window.localStorage.setItem('cart', JSON.stringify(cart));
    }
}