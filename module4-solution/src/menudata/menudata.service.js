(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;
  service.categories = {};
  //service.chosenCategory = "";

  service.getAllCategories = function(){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function successCallBack(response) {
      var categories = response.data;
      service.categories = categories;
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
       //console.log(response);
       var menu_items = response.data.menu_items;
       var chosenCategory = response.data.category;
       return { 'menu_items' : menu_items,
               'category_id': categoryId,
               'category_name': chosenCategory.name
              };

     },function errorCallback(response){
       console.log(response);
     });
    }
}

})();
