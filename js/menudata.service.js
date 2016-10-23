(function () {
    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var menuDataService = this;

        menuDataService.getAllCategories = function () {
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
                .then(function (res) {
                    return res.data;
                });
        };

        menuDataService.getItemsForCategory = function (categoryShortName) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json', {
                params: {
                    category: categoryShortName
                }
            })
                .then(function (res) {
                    return res.data.menu_items;
                });
        };
    }
})();