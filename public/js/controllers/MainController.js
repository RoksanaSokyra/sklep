angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, items) {//, items) {//, items) {
	console.log("Main Controler");
    var vm = this;
    vm.items = items;
}