angular
    .module('myApp')
    .controller('CategoryController', CategoryController);

function CategoryController(CategoryService, $state) {
    var vm = this;
    vm.category = {
        title: "",
        
    };
    vm.putCategory = putCategory;

    function putCategory() {
        CategoryService.putCategory(vm.category);
        $state.go('shop.items');
    }
}