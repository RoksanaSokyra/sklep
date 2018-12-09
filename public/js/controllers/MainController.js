angular
    .module('myApp')
    .controller('MainController', MainController, moment);

function MainController($scope, items, ItemService) {//, items) {//, items) {
    var vm = this;
    vm.items = items;
    vm.isNewItem = isNewItem;
    vm.sort = sort;
    vm.sortType = "-date";//'{"condition": "date" , "order": 1}';
    function isNewItem(date) {
        return ItemService.isNewItem(date);
    }
    function sort(type) {
        //ItemService.getSortedItems(JSON.parse(type), 'all').then(function (res) {
        //    vm.items = res;
       // });
    }
}