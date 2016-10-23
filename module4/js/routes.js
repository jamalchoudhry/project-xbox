(function () {
    'use strict';

    angular.module('MenuApp')
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('categories', {
                url: '/categories',
                component: 'categories',
                resolve: {
                    categories: ['MenuDataService',
                        function (MenuDataService) {
                            return MenuDataService.getAllCategories();
                        }
                    ]
                }
            })
            .state('items', {
                url: '/items/{categoryId}',
                component: 'items',
                resolve: {
                    items: ['MenuDataService', '$stateParams',
                        function(MenuDataService, $stateParams) {
                            return MenuDataService.getItemsForCategory($stateParams.categoryId);
                        }
                    ]
                }
            })
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.template.html'
            });

        $urlRouterProvider
            .otherwise('/');
    }
})();