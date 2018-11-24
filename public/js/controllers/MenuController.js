angular
    .module('myApp')
    .controller('MenuController', MenuController);

function MenuController($scope, categories) {//, items) {//, items) {
    console.log("Menu Controler");
	var vm = this;
    vm.categories = categories;
}