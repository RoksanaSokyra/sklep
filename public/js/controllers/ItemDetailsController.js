angular
    .module('myApp')
    .controller('ItemDetailsController', ItemDetailsController);

function ItemDetailsController(item, $state, CartService) {
    var vm = this;
    vm.item = item;
    vm.addToCart = addToCart;
    vm.changeImage = changeImage;
    vm.size = "";

    function addToCart() {
        CartService.addToCart(item, vm.size); 
    }

    function changeImage(index) {
        vm.item.imageIndex = index;
    }


}