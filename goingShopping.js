// Create an array called shoppingList with the following items:
//  'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Add 'fruit loops' to the list
shoppingList.push('fruit loops');

// Update 'coffee' to 'fair trade coffee'
shoppingList[4] = 'fair trade coffee';

// Replace 'chips' and 'salsa' with 'rice' and 'beans'
shoppingList.splice(2, 2, 'rice', 'beans');

// Create an empty array to represent your shopping cart called shoppingCart.
let shoppingCart = [];

// Remove the last item from your shopping list and add it to your cart
shoppingCart.push(shoppingList.pop());

// Remove the first item from your shopping list and add it to the cart
shoppingCart.push(shoppingList.shift());

// Write a 'while' loop that takes items from your shopping list and 
// moves them to your cart until there are no items left on the list.
while(shoppingList.length > 0){
    shoppingCart.push(shoppingList.shift())
}

// Sort the items in your cart alphabetically... and then backwards
shoppingCart.sort()
shoppingCart.reverse()

// Print the list of items in your shopping cart to the console as comma separated string.
console.log(shoppingCart.toString());


