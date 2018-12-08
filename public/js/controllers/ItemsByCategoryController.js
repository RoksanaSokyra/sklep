angular
    .module('myApp')
    .controller('ItemsByCategoryController', ItemsByCategoryController);

function ItemsByCategoryController($scope, items, ItemService) {//, items) {//, items) {
    var vm = this;
		
	$scope.sorting = '-title';
	$scope.reverse = true;
	
    vm.items = items;
    vm.isNewItem = isNewItem;
	

    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
}