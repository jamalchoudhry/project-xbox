(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);
        // LunchCheckController.$inject=[$scope];
        function LunchCheckController($scope){
            $scope.message = "";
            $scope.list="";
            $scope.calcMenu = function (){

                var list1 = $scope.list;
                if (list1 == "") {
                    $scope.message = "Please enter data first";
                } else {
                    var length1 = calcLength(list1);
                    if (length1 <=3) {
                        $scope.message = "Enjoy!";
                    } else {
                        $scope.message = "Too much!";
                    }
                }
            }

        }

        function calcLength(list1){
            var array = list1.split(",");
            console.log(array.length);
            return array.length;
        }
})();