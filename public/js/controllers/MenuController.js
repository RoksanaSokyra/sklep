angular
    .module('myApp')
    .controller('MenuController', MenuController);

function MenuController($scope, categories) {
    var vm = this;
    vm.categories = categories;
}