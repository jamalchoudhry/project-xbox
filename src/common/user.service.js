(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$q'];
function UserService($q) {
  var service = this;
  var myInfo;

  service.getMyInfo = function () {
    var deferred = $q.defer();

    if (angular.isUndefined(service.myInfo) || service.myInfo === null) {
       deferred.reject(new Error("Not signedup"))
    }
    else {
      deferred.resolve(service.myInfo);
    }

    return deferred.promise;

  };


  service.signup = function (myInfo) {
    var deferred = $q.defer();

    service.myInfo = myInfo;
    deferred.resolve();

    return deferred.promise;

  };

}

})();
