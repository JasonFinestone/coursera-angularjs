(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

// 'items' is injected through state's resolve
ItemListController.$inject = ['items','category_id']
function ItemListController(items, category_id) {
  var itemList = this;
  itemList.items = items;
  itemList.category_id = category_id;
}

})();
