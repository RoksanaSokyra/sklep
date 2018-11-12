angular
    .module('myApp')
    .controller('ItemController', ItemController);

function ItemController(ItemService, $state) {
    var vm = this;
    vm.item = {
        title: "",
        discription: "",
        size: 0,
        category: "",
        price: 0,
       // images: [],
        mainImageIndex: 0,
        quantity: 0
    };

    vm.putItem = putItem;

    function putItem() {
        ItemService.putItem(vm.item);
        $state.go('shop.products');
    }
}