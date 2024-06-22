// Seeing the World: Think of at least five places in the world you’d like to visit.
// PART A
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const visitedPlace = [
    "New YOrk",
    "Canada",
    "Istanbul",
    "Europ",
    "Dubai",
];
// PART B
// • Print your array in its original order.
console.log("In its Original Positon", visitedPlace);
// PART C
// • Print your array in alphabetical order without modifying the actual list.
const alphabeticalOrder = [...visitedPlace];
console.log("alphabetical Order", alphabeticalOrder.sort());
// PART D
// • Show that your array is still in its original order by printing it.
console.log("In its Original Positon", visitedPlace);
// PART E
// • Print your array in reverse alphabetical order without changing the order of the original list.
const reverseAlphabetical = alphabeticalOrder.sort().reverse();
console.log("reverse alphabetical order", reverseAlphabetical);
// PART F
//  • Show that your array is still in its original order by printing it again.
console.log("In its Original Positon", visitedPlace);
// PART G
// • Reverse the order of your list. Print the array to show that its order has changed.
const originalReversed = visitedPlace.reverse();
console.log("Reverse the order", originalReversed);
// PART H
//  • Reverse the order of your list again. Print the list to show it’s back to its original order.
const againReversed = originalReversed.reverse();
console.log("Reverse the order", againReversed);
// PART I
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
const sortInAlphabetical = againReversed.sort();
console.log("alphabetical order", sortInAlphabetical);
// PART J
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const againrevered = sortInAlphabetical.reverse();
console.log("reverse alphabetical order", againrevered);
export {};
