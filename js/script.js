// Business logic

// constructor for pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function topLoop(array) {
  let tops = [];
  for (let i = 0; i <= array; i++) {
    tops.push(i);
  }
}

// prototype for pizza price
Pizza.prototype.pizzaPrice = function () {
  let newPrice = 0;
  if (this.size === "small") {
    newPrice += this.toppings * 2.5 + 7;
    return newPrice;
  } else if (this.size === "medium") {
    newPrice += this.toppings * 2.25 + 10;
  } else if (this.size === "large") {
    newPrice += this.toppings * 2 + 13;
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
    newToppings = $('input[type="checkbox"]:checked').length;
    console.log(newToppings);
    let newPizza = new Pizza(newToppings, newSize);
    console.log(newPizza);
    let eatPizza = newPizza.pizzaPrice();
    console.log(eatPizza);
    $("#test").text(eatPizza);

  });
});