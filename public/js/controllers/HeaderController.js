angular
    .module('myApp')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, categories, CartService, LoginService, UserService) {
    var vm = this;
    if (LoginService.isLogged()) {
        vm.user = getUser();
    }
    vm.categories = categories;
    vm.cart = CartService.getCart();
    vm.status = LoginService.getStatus();

    function getUser() {
        UserService.getCurrentUser().then(function (response) {
            vm.user = response.data;
        });
    }
    $scope.$watch('headerCtrl.status.value', function () {

        if (vm.status.value == true) {
            getUser();
        }
        else vm.user = {};

        $scope.search = {
            text: '',
            word: /^[\w -]+/
        };
    });
   
}