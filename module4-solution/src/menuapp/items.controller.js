(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

// 'items' is injected through state's resolve
ItemListController.$inject = ['items']
function ItemListController(items) {
  var itemList = this;
  // I bolted on the chosen category to the service return data so that I can use it in the items template
  itemList.items = items.menu_items;
  itemList.category_id = items.category_id;
}

})();
