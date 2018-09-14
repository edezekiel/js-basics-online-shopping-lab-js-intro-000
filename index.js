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
  var sum = null;
  for (var i = 0; i < cart.length; i++) {
  sum += cart[i].itemPrice
  }
return sum;
  //returns the current total value of the items in the cart
}

// function removeFromCart(item) {
//   // write your code here
// if (!cart = item){
//   return "That item is not in your cart."
// }
//
// else {
// }
// }

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    `Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`
  }
}
