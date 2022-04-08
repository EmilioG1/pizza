// Business logic

// constructor for pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// prototype for pizza price
// -- needs to change size price based on user input
Pizza.prototype.pizzaPrice = function () {
  const smal = 7;
  const med = 10;
  const lar = 13;
  return this.toppings.length * 3 + lar;
}

// instance of pizza object
const myPizza = new Pizza(['basil', 'mozzarella'], 'media');

console.log(myPizza);

// UI Logic

// $(document).ready(function () {
//   $("#test").text(myPizza);
// });