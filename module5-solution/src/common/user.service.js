(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;

  service.saveInfo = function (user) {
    service.userInfo = user;
    //console.log('Saved in the service', service.userInfo)
  }

  service.retrieveInfo = function () {
    //console.log('Retrieved from the service', service.userInfo)
    return service.userInfo;
  }

}
})();
