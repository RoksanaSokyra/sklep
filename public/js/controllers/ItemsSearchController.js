angular
    .module('myApp')
    .controller('ItemsSearchController', ItemsSearchController);
function ItemsSearchController($scope, items, ItemService) {//, items) {//, items) {
    var vm = this;
	
	$scope.sorting = '-title';
	$scope.reverse = true;   

    vm.items = items;
    vm.isNewItem = isNewItem;

    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
}
