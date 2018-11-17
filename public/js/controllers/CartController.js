angular
    .module('myApp')
    .controller('CartController', CartController);

function CartController(CartService, $state) { //cart jako argument
    var vm = this;
    vm.cart = CartService.getCart();
   // function getCart() {
      //  return CartService.getCart();
    //}
    //vm.cart = cart; //czy lepiej funkcje

}