(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/categories.template.html',
  bindings: {
    items: '<',
    category_id: '@'
  }
});

})();
