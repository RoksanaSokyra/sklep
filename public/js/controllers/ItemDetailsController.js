angular
    .module('myApp')
    .controller('ItemDetailsController', ItemDetailsController);

function ItemDetailsController(item, $state, CartService) {//, items) {//, items) {
    var vm = this;
    vm.item = item;
    vm.addToCart = addToCart;
    vm.changeImage = changeImage;
    vm.size = "";

    function addToCart() {
        console.log(vm.size);
        CartService.addToCart(item, vm.size); //size
    }

    function changeImage(index) {
        vm.item.imageIndex = index;
    }


}