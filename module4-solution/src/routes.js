(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category list state
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menuapp/templates/category-list.template.html',
    //controller: 'MainShoppingListController as mainList'
    controller: 'CategoryListController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  // Item List state
  .state('itemList', {
    url: '/item-list/{categoryId}',
    templateUrl: 'src/menuapp/templates/item-list.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (items) {
          return MenuDataService.getItemsForCategory($stateParams.categoryId);
        });
      }]
    }
  });
}

})();
