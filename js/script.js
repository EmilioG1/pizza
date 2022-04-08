// Business logic

// constructor for pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
  
// prototype for pizza price
// -- needs to change size price based on user input
Pizza.prototype.pizzaPrice = function () {
  let newPrice = 0;
  if (this.size === "small") {
    newPrice += this.toppings.length * 2.5 + 7;
    return newPrice;
  } else if (this.size === "medium") {
    newPrice += this.toppings.length * 2.25 + 10;
  } else if (this.size === "large") {
    newPrice += this.toppings.length * 2 + 13;
  }
  return newPrice;
}

// instance of pizza object
const myPizza = new Pizza(['basil', 'mozzarella'], 'medium');


// UI Logic


$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    let newToppings = [];
    let newSize = $('input:radio[name=size]:checked').val();
    newToppings = parseInt($('input:checkbox[name="toppings"]:checked').val());
    // newToppings = $('input:checkbox[name=toppings]:checked#mozzarella').val();
    // newToppings = $('input:checkbox[name=toppings]:checked#pepperoni').val();
    // newToppings = $('input:checkbox[name=toppings]:checked#mushrooms').val();
    // newToppings = $('input:checkbox[name=toppings]:checked#olives').val();
    console.log(newToppings.length);
    let newPizza = new Pizza(newToppings, newSize);
    console.log(newPizza);
    let eatPizza = newPizza.pizzaPrice();
    console.log(eatPizza);
    $("#test").text(eatPizza);

  });
});