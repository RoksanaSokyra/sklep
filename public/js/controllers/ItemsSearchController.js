angular
    .module('myApp')
    .controller('ItemsSearchController', ItemsSearchController);
function ItemsSearchController($scope, items, ItemService) {//, items) {//, items) {
    var vm = this;
    vm.items = items;
    vm.isNewItem = isNewItem;

    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
}
