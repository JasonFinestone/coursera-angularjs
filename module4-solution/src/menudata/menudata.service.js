(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function(){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function successCallBack(response) {
      var categories = response.data.categories;
      return categories;

    },function errorCallback(response){
      console.log(response);
    });
   }

   service.getItemsForCategory = function(categoryId){
     return $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryId
      }
     }).then(function successCallBack(response) {
       var menu_items = response.data.menu_items;
       return menu_items;

     },function errorCallback(response){
       console.log(response);
     });
    }
}

})();
