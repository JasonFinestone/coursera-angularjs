(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['favouriteItems', 'MenuService','UserService'];
function SignUpController(favouriteItems, MenuService, UserService) {
  var $ctrl = this;
  $ctrl.favouriteItems = favouriteItems;

  $ctrl.submit = function (user) {
    MenuService.getMenuItem($ctrl.user.favourite).then(function(retrievedFavourite){
      if (retrievedFavourite.short_name == user.favourite){
        $ctrl.user.retrievedFavourite = retrievedFavourite;
        // How to save the info now?
        UserService.saveInfo(user);
        // Message to say saved
        $ctrl.message = "Your information has been saved."
        //alert("Your information has been saved.")
      }
      else{
        $ctrl.message = "No such menu number exists. You entered " + $ctrl.user.favourite
        //alert($ctrl.user.favourite + " menu number does not exist")
        $ctrl.user.favourite = null;
      }
    });
  };

}
})();
