(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myinfo', 'ApiPath'];
function MyInfoController(myinfo, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.myinfo = myinfo;
  myInfoCtrl.apipath = ApiPath;

}

})();
