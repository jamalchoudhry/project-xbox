(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var buyList = this;

        buyList.items = ShoppingListCheckOffService.getItemsToBuy();

        buyList.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getItemsBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var itemsToBuy = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "5"
            },
            {
                name: "Cookies",
                quantity: "10"
            },
            {
                name: "Chocolate",
                quantity: "5"
            },
            {
                name: "Bananas",
                quantity: "12"
            }
        ];

        var itemsBought = [];

        service.buyItem = function (itemIndex) {
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };
    }

})();