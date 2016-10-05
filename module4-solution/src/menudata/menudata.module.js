(function () {
'use strict';

angular.module('MenuData', []);

angular.module('MenuData')
.config(function () {
  console.log("MenuData config fired.");
})
.run(function () {
  console.log("MenuData run fired.");
});

})();
