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
}

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var itemAdder = this;

  itemAdder.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function(){
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //Clear out the form so other items can be added
    itemAdder.itemName = ""; itemAdder.itemQuantity = "";
  }

  itemAdder.buyItem = function(itemIndex,itemName, itemQuantity){
    ShoppingListCheckOffService.buyItem(itemIndex, itemName, itemQuantity);
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuy = [{ name: "Cookies", quantity: 10 },
                { name: "Sugary drinks", quantity: 20 },
                { name: "Pepto Bismol", quantity: 30 },
                { name: "Butter", quantity: 5 },
                { name: "Milk", quantity: 15 }
              ];
  // List of bought items
  var bought = [];

  service.addItem = function (itemName, quantity) {
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
