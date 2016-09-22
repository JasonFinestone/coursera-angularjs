(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var itemBuyer = this;

  itemBuyer.itemsBought = ShoppingListCheckOffService.getItemsBought();
  itemBuyer.numItemsBought = itemBuyer.itemsBought.length;

}

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var itemAdder = this;

  itemAdder.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
  itemAdder.numItemsToBuy = itemAdder.itemsToBuy.length;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function(){
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }

  itemAdder.buyItem = function(itemIndex,itemName, itemQuantity){
    ShoppingListCheckOffService.buyItem(itemIndex, itemName, itemQuantity);
  }

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuy = [];
  // List of bought items
  var bought = [];

  service.addItem = function (itemName, quantity) {
    console.log('what', itemName, quantity);
    var buy = {
      name: itemName,
      quantity: quantity
    };
    toBuy.push(buy);
  };

  service.buyItem = function (itemIdex, itemName, quantity) {
    var bite = {
      name: itemName,
      quantity: quantity
    };
    toBuy.splice(itemIdex, 1);
    bought.push(bite)
  };

  service.getItemsToBuy = function () {
    return toBuy;
  };
  service.getItemsBought = function () {
    return bought;
  };
}


})();
