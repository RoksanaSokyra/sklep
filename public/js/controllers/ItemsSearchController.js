angular
    .module('myApp')
    .controller('ItemsSearchController', ItemsSearchController);
	
function ItemsSearchController($scope, items) {//, items) {//, items) {
    var vm = this;
    vm.items = items;
} 