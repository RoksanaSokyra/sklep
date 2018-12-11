angular
    .module('myApp')
    .controller('MainController', MainController, moment);

function MainController($scope, items, ItemService) {
    var vm = this;
    vm.items = items;
    vm.isNewItem = isNewItem;
    vm.sortType = "-date";

    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
}