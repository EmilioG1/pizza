Describe Pizza();

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(['basil', 'mozzarella'], "medio");
Expected Output: Pizza { toppings: ['basil', 'mozzarella'], size: 'medio'}

Test: "It should show in console if each property is accessed in myPizza object"
Code: myPizza.toppings; and myPizza.size;
Expected Output: ['basil', 'mozzarella'] and 'medio'

Describe Pizza.prototype.pizzaPrice();

Test: "It should return number of toppings multiplied by 3"
Code: myPizza.pizzaPrice();
Expected Output: 6

Test: "It should return num of toppings * 3 + 10 for variable med"
Code: myPizza.pizzaPrice()
Expected Output: 16

# Pizza Parlor

#### By Emilio Gonzales

#### A webpage taking user's pizza size and toppings preferences and returning the total price.

_[Link to GitHub Directory](https://github.com/EmilioG1/pizza.git)_

## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description
_This is a website that will take a users pizza order, using selectors and radio inputs, and will return their order total._

## Setup/Installation Instructions
* Clone this repository to your desktop
* Navigate to the top level of pizza main branch
* Open index.html in your browser

## No Known Bugs

# License
[MIT](https://choosealicense.com/licenses/mit/)

_If you have any issues or questions don't hesitate to contact me on GitHub, and please feel free to add to this code_

Copyright (c) _2022_ _Emilio Gonzales_