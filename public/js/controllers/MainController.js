angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, items) {//, items) {//, items) {
    var vm = this;
    vm.items = items;
}