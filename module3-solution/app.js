(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      listTitle: '@title',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function NarrowItDownDirectiveController() {
  var list = this;
  list.title = "Found in description of menu items:";
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var nidCtrl = this;

  nidCtrl.searchMenuItems = function (searchTerm) {

  var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

  promise.then(function (response){
    //console.log(response);
    nidCtrl.found = response;
    })
    .catch(function (error){
       console.log(error);
    })

  };


  nidCtrl.removeItem = function (itemIndex) {
          //console.log("'this' is: ", this);
          MenuSearchService.removeItem(itemIndex);
        };


}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
     // process result and only keep items that match
     var allItems = result.data.menu_items;

     for (var i = 0; i < allItems.length; i++){
       var item = allItems[i];
       var description = item.description;
       if (description.toLowerCase().indexOf(searchTerm) !== -1) {
         //add to the list of found items
         foundItems.push(item);
       }
     };
     // return processed items
     //console.log(foundItems);
     return foundItems;
   }).catch(function (error) {
     console.log(error);
   });
  }

  service.removeItem = function (itemIndex) {
    //console.log(itemIndex);
    foundItems.splice(itemIndex, 1);
  };

}

})();
