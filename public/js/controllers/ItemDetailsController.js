angular
    .module('myApp')
    .controller('ItemDetailsController', ItemDetailsController);

function ItemDetailsController(item, $state) {//, items) {//, items) {
    var vm = this;
    vm.item = item;

}