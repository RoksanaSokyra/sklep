angular
    .module('myApp')
    .controller('MainController', MainController, moment);

function MainController($scope, items, ItemService) {//, items) {//, items) {
    var vm = this;
	
	vm.items = items;
    vm.isNewItem = isNewItem;
	$scope.sort = sort;

    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
	
	function sort(type) {
		let order='asc';
		let itemsToSort = items;
		let type2 = 'price';
		itemsToSort.sort(function(a, b) {
			if(!a.hasOwnProperty(type2) || !b.hasOwnProperty(type2)) {
				return 0;
			}

			let varA = a[type2];
			let varB = b[type2];

			let comparison = 0;
						
			if(typeof a[type2] === 'string'){
				comparison = varA.localeCompare(varB);
			} else if (typeof a[type2] === 'number'){
				comparison = varA - varB;
			}
			
			return ((order == 'desc') ? (comparison * -1) : comparison);
		});
		vm.items = itemsToSort;
	}
	
}

