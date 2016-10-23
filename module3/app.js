(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'list.html',
            scope: {
                found: '<',
                isEmpty: '<',
                numberOfSearches: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }


    function FoundItemsDirectiveController() {
        var list = this;

    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;

        list.found = [];

        list.isEmpty = true;
        list.numberOfSearches = 0;

        list.getItems = function (searchTerm) {
            list.numberOfSearches++;

            if(searchTerm !== '') {

                list.found = [];
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

                promise.then(function (response) {
                    list.found = response;

                    if(list.found.length === 0)
                        list.isEmpty = true;
                    else
                        list.isEmpty = false;
                })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
            else {
                list.isEmpty = true;
            }


        };

        list.removeItem = function (itemIndex) {
            //list.found = MenuSearchService.removeItem(itemIndex);
            list.found.splice(itemIndex, 1);
        };


    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var totalItems = [];
            var foundItems = [];

            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (response) {
                totalItems = response.data.menu_items;

                for (var i = 0; i < totalItems.length; i++) {
                    var name = totalItems[i].name;
                    if (name.toLowerCase().indexOf(searchTerm) !== -1) {
                        foundItems.push(totalItems[i]);
                    }
                }

                return foundItems;
            })

        };

    }


})();