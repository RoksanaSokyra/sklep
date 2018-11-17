angular.module('myApp').config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('shop', {
            url: '/',
            resolve: {
                items: function (ItemService) {
                    return ItemService.getItems();
                        }
            },
            views: {
                '': {
                    templateUrl: 'views/shop_structure.html',
                },
                'header@shop': {
                    templateUrl: 'views/header.html'
                },
                'footer@shop': {
                    templateUrl: 'views/footer.html',
                },
				'menu_settings@shop': {
                    templateUrl: 'views/menu_settings.html',
                },
				'main_menu@shop': {
                    templateUrl: 'views/main_menu.html',
                },
                'main@shop': {
                    templateUrl: 'views/main.html',
                    controller: 'MainController',
                    controllerAs: 'mainCtrl',
                  
                },
				'slideshow@shop': {
					templateUrl: 'views/slideshow.html',
				}
            }
        })
        .state('addItem', {
            url: '/items',
            templateUrl: 'views/items.html',
            controller: 'ItemController',
            controllerAs: 'itemCtrl'

        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            controllerAs: 'registerCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
}

//function getItems(ItemsService) {
  //  return ItemsService.getItems();
//}
/*
angular.module('myApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            controllerAs: 'registerCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
*/
/*
angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, items) {//, items) {//, items) {
    var vm = this;
   vm.items = items;
}(/)*/