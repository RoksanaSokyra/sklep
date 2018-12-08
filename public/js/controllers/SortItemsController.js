angular
    .module('myApp')
    .controller('SortItemsController', SortItemsController);

function SortItemsController($scope, items, ItemService) {//, items) {//, items) {
    var vm = this;
	
    vm.items = items;
    vm.isNewItem = isNewItem;
	
    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
}