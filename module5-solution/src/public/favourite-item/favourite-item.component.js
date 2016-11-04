(function () {
"use strict";

angular.module('public')
.component('favouriteItem', {
  templateUrl: 'src/public/favourite-item/favourite-item.html',
  bindings: {
    favouriteItem: '<'
  },
  controller: FavouriteItemController
});


FavouriteItemController.$inject = ['ApiPath'];
function FavouriteItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
