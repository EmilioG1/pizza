// Business logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

let myPizza = new Pizza(['basil', 'mozzarella'], 'medio');

console.log(myPizza);

// UI Logic

// $(document).ready(function () {
//   $("#test").text(myPizza);
// });