(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    categories: '<'
  }
});

})();
