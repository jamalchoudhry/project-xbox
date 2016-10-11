(function () {
    'use strict';

    angular.module('ShoppingList', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListService', ShoppingListService);

    function ShoppingListService() {
        var service = this;

        service.itemsList = [
            {
                quantity: 12,
                name: 'Cupcakes'
            }, {
                quantity: 16,
                name: 'Cookies'
            }, {
                quantity: 22,
                name: 'Pastries'
            }, {
                quantity: 50,
                name: 'Chocolate Bars'
            }, {
                quantity: 100,
                name: 'Lolipops'
            }];

        service.boughtItems = [];

        service.markItem = function (itemIndex) {
            var item = service.itemsList[itemIndex];
            service.itemsList.splice(itemIndex, 1);
            service.boughtItems.push(item);
        }
    }

    ToBuyShoppingController.$inject = ['ShoppingListService'];

    function ToBuyShoppingController(ShoppingListService) {
        var toBuyCtrl = this;

        toBuyCtrl.itemsList = ShoppingListService.itemsList;
        // console.log(toBuyCtrl.itemsList);

        toBuyCtrl.markItem = function (itemIndex) {
            ShoppingListService.markItem(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];

    function AlreadyBoughtShoppingController(ShoppingListService) {
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.boughtItems = ShoppingListService.boughtItems;
    }
})();