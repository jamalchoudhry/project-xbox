(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$http', 'ApiPath', 'UserService'];
function SignupController($http, ApiPath, UserService) {
  var signupCtrl = this;
  signupCtrl.user =  {} ;

  signupCtrl.setSelectedMenu = function(selectedMenu) {

    signupCtrl.user.selectedMenu = selectedMenu;
  }

  signupCtrl.signup = function () {
    UserService.signup(signupCtrl.user);
  }
}

})();
