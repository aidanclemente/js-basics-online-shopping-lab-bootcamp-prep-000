var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var itemPrice = "";
var itemName = "";

function addToCart(item) {
   // write your code here
   itemPrice = Math.floor(Math.random() * 100) + 1;
   itemName = item;
   var itemConstructor = {[itemName]: parseInt([itemPrice])};
   cart.push(itemConstructor);

   console.log(`${itemName} has been added to your cart.`);
   return cart;
}

var cartItems = [];

function viewCart() {
  // write your code here
  for (var i = 0; i <= cart.length; i++) {
    if (cart.length > 1) {
      for (var j = 0; j < cart.length; j++) {
        let object = cart[j];
        let itemName = Object.keys(cartItems)[0];
        let price = object[itemName];
        cartItems.push(`${itemName} at $${price}`);
      }
    cartItems[cartItems.length - 1] = `and ${cartItems[cartItems.length - 1]}`;
    console.log(`In your cart, you have ${cartItems.join(", ")}.`);
    } else if (cart.length === 1) {
            console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
    } else {
        console.log('Your shopping cart is empty.');
      }
   }
}

function total() {
  // write your code here
  // for (var i = 0; i <= cart.length; i++) {
  //   total = cart.itemPrice +=
  // }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
