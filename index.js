var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var newObject = {itemName: item}
  newObject.itemPrice = Math.floor(Math.random() * 100) + 1;

  cart.unshift(newObject)
  console.log(newObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var newArray = [];

  if (!cart.length){
    return "Your shopping cart is empty."

  } else if (cart.length === 1) {
      newArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
      return `In your cart, you have ${newArray.join(', ')}.`

  } else {
  for (let i = 0; i < cart.length; i++) {
    if (i < cart.length - 1){
      newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    } else {
      newArray.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  }
  return `In your cart, you have ${newArray.join(', ')}.`
  }
}

function total() {
  //iterates through the cart array

  return getCart().reduce((sum, i) => sum + i.itemPrice, 0)
}

//   let cart_total = 0;
//   for (let i = 0; i < getCart().length; i++) {
//     cart_total += getCart()[i].itemPrice
//   }
// return cart_total;
  //returns the current total value of the items in the cart
}

// function total() {
//   //iterates through the cart array
//   var adds = null;
//   for (let i = 0; i < cart.length; i++) {
//   adds += getCart()[i].itemPrice
//   }
//
// return total;
//   //returns the current total value of the items in the cart
// }

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
