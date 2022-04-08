// Business logic

// constructor for pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// prototype for pizza price
Pizza.prototype.pizzaPrice = function () {  
  return this.toppings.length * 3;
}

// instance of pizza object
const myPizza = new Pizza(['basil', 'mozzarella'], 'medio');

console.log(myPizza);

// UI Logic

// $(document).ready(function () {
//   $("#test").text(myPizza);
// });