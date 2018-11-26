angular.module('myApp').config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('shop', {
            url: '/',
            resolve: {
                items: function (ItemService) {
                    return ItemService.getItems();
                },
                categories: function (CategoryService) {
                    return CategoryService.getCategories();
                }
            },
            views: {
                '': {
                    templateUrl: 'views/shop_structure.html',
                },
                'header@shop': {
                    templateUrl: 'views/header.html',
                   controller: 'HeaderController',
                    controllerAs: 'headerCtrl',
                },
                'footer@shop': {
                    templateUrl: 'views/footer.html',
                },
                'main@shop': {
                    templateUrl: 'views/main.html',
                    controller: 'MainController',
                    controllerAs: 'mainCtrl',

                }
            }
        })
        .state('shop.item', {
            url: 'items/:id',
            resolve: {
            item: function (ItemService, $stateParams) {
                 return ItemService.getItem($stateParams.id);
                 }
            },
           views: {
                'main@shop': {
                    templateUrl: 'views/item-details.html',
                    controller: 'ItemDetailsController',
                    controllerAs: 'itemDetailsCtrl'
                }
            }
        })
        .state('shop.category', {
            url: 'category/:category',
            resolve: {
                items: function (ItemService, $stateParams) {
                    return ItemService.getItemByCategory($stateParams.category);
                }
            },
            views: {
                'main@shop': {
                    templateUrl: 'views/itemsByCategory.html',
                    controller: 'ItemsByCategoryController',
                    controllerAs: 'itemByCategoryCtrl'
                }
            }
        })
        .state('shop.checkout', {
            url: 'checkout',
            resolve: {
                delivery: function (DeliveryService) {
                    return DeliveryService.getDeliveries();
                }
            },
            views: {
                'main@shop': {
                    templateUrl: 'views/checkoutForm.html',
                    controller: 'CheckoutFormController',
                    controllerAs: 'checkoutCtrl'
                }
            }
        })
        .state('shop.checkout.address', {
            url: '/address',
            templateUrl: 'views/checkoutFormAddress.html'
        })
        .state('shop.checkout.deliveryAndPayment', {
            url: '/delivery',
            templateUrl: 'views/checkoutFormPaymentAndDelivery.html'
        })
        .state('shop.checkout.summary', {
            url: '/summary',
            templateUrl: 'views/checkoutFormSummary.html'
        })
        .state('shop.cart', {
            url: 'cart',
            resolve: {
                cart: function (CartService) {
                    return CartService.getCart();
                }
            },
            views: {
                'main@shop': {
                    templateUrl: 'views/cart.html',
                    controller: 'CartController',
                    controllerAs: 'cartCtrl'
                }
            }
        })
        .state('shop.address', {
            url: 'address',
            views: {
                'main@shop': {
                    templateUrl: 'views/deliveryAddress.html',
                    controller: 'AddressController',
                    controllerAs: 'addressCtrl'
                }
            }
        })
        .state('shop.deliveryAndPayment', {
            url: 'delivery',
            views: {
                'main@shop': {
                    templateUrl: 'views/deliveryAndPayment.html',
                    controller: 'DeliveryAndPaymentController',
                    controllerAs: 'deliveryAndPaymentCtrl'
                }
            }
        })
        .state('addItem', {
            url: '/items',
            templateUrl: 'views/items.html',
            controller: 'ItemController',
            controllerAs: 'itemCtrl'

        })
        .state('addCategory', {
            url: '/categories',
            templateUrl: 'views/categories.html',
            controller: 'CategoryController',
            controllerAs: 'categoryCtrl'

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