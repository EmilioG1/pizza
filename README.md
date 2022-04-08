Describe Pizza();

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(['basil', 'mozzarella'], "medio");
Expected Output: Pizza { toppings: ['basil', 'mozzarella'], size: 'medio'}

Test: "It should show in console if each property is accessed in myPizza object"
Code: myPizza.toppings; and myPizza.size;
Expected Output: ['basil', 'mozzerella'] and 'medio'

Describe Pizza.prototype.pizzaPrice();

Test: "It should return number of toppings multiplied by 3"
Code: myPizza.pizzaPrice();
Expected Output: 6

Test: 
Code: 
Expected Output: 

Test: 
Code: 
Expected Output: 

Test: 
Code: 
Expected Output: 

Test: 
Code: 
Expected Output: 

Test: 
Code: 
Expected Output: 