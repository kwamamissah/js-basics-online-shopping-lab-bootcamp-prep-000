var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 // passed in string = 'item'
 
var price = Math.floor((Math.random() * 100));

var shopItem = {itemName: item,
  itemPrice: price};
  
cart.push(shopItem);
return `${item} has been added to your cart.`;

}

function viewCart() {
  // write your code here
  
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    
    var arr = [];
    for(var i = 0; i < cart.length; i++) {
     
  }
    return `In your cart, you have ${ arr.join(", ") }.`;
  }
}

function total() {
  var sum = 0;
  
  for(var i = 0; i < cart.length; i++) {
    
  sum += cart[i];
  }
  return cart.reduce();
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
