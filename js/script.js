// Business logic

// constructor for pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
  
// prototype for pizza price
// -- needs to change size price based on user input
Pizza.prototype.pizzaPrice = function () {
  if (size === small) {
    this.toppings.length * 3 + small;
    return this;
  } else if (size === medium) {
    this.toppings.length * 3 + medium;
    return this;
  } else if (size === large) {
    this.toppings.length * 3 + large;
    return this;
  }
}

// instance of pizza object
const myPizza = new Pizza(['basil', 'mozzarella'], 'media');

console.log(myPizza);

// UI Logic
const small = 7;
const medium = 10;
const large = 13;

let newPizza = new Pizza();

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault;
    const size = $('input:radio[name=size]:checked').val();
    const toppings = $('input:checkbox[name=toppings]:checked').val();

    let newPizza = new Pizza(toppings, size);
    nowPizza = newPizza.pizzaPrice();
    nowPizza.text("#test");

  });
});