angular
    .module('myApp')
    .controller('ItemsByCategoryController', ItemsByCategoryController);

function ItemsByCategoryController($scope, items) {//, items) {//, items) {
    var vm = this;
    vm.items = items;
}