(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menu = "";

  $scope.checkMenu = function () {
    var totalMenuItems = calculateNumberOfItems($scope.menu);

    if (totalMenuItems === 0){
      $scope.message = "Please enter data first"
    }
    else if (totalMenuItems > 3) {
      $scope.message = "Too much!"
    }
    else{
      $scope.message = "Enjoy!"
    }
    console.log("Number of items entered is " + totalMenuItems);
  };


  function calculateNumberOfItems(string) {
    var totalStringCount = 0;
    if (string) {
      var arrayOfStrings = string.split(',');
      totalStringCount = arrayOfStrings.length
    }
    console.log("The items are " + arrayOfStrings);
    return totalStringCount;
  }

};


})();
