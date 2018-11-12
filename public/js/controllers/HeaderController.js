angular
    .module('myApp')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, categories) {//, items) {//, items) {
    var vm = this;
    vm.categories = categories;
}