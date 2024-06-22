// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// PART A
// • Tests for equality and inequality with strings
// Test 1
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False
// Test 2
// • Tests using the lower case function
console.log("Apple".toLowerCase() === "apple"); // True
// Test 3
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 > 3); // True
console.log(2 < 1); // False
console.log(5 >= 5); // True
console.log(3 <= 3); // True
//Test 4
// • Tests using "and" and "or" operators
console.log(5 >= 5 && 5 > 4); //In this Case all condition should be true
console.log(5 > 5 || 5 > 4); //In this atleast one condition should be true
// Test 5
// • Test whether an item is in a array
let fruits = ["apple", "mango", "apricot"];
console.log("Is an apple in an array?");
console.log(fruits.includes("apple"));
//Test 6
// • Test whether an item is not in a array
console.log("Is an apple not in an array?");
console.log(!fruits.includes("apple"));
export {};
