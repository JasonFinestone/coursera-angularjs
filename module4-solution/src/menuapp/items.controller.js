(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

// 'items' is injected through state's resolve
ItemListController.$inject = ['items']
function ItemListController(items) {
  var itemList = this;
  itemList.items = items;
}

})();
