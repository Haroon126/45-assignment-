// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const sandwichIngredients = [
    "whole grain bread",
    "turkey",
    "lettuce",
    "tomato",
    "mayo",
    "cheese",
];
function sandwich([...items]) {
    console.log(`Making sandwitch with ${items.join(" and ")}`);
}
sandwich([sandwichIngredients[0], sandwichIngredients[1]]);
sandwich([
    sandwichIngredients[2],
    sandwichIngredients[3],
    sandwichIngredients[4],
]);
sandwich([
    sandwichIngredients[3],
    sandwichIngredients[4],
    sandwichIngredients[5],
    sandwichIngredients[1],
]);
export {};
