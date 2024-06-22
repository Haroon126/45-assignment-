// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let friend_Names = [
    "Wahaj",
    "Shan",
    "Zahid",
    "Waqas",
    "Haris",
    "Jibran",
    "Huzaifa",
    "Younus",
];
// PART A
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`I can Invite only two person only for the dinner`);
// PART B
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (friend_Names.length > 2) {
    let poped_Name = friend_Names.pop();
    console.log(`Sorry ${poped_Name} I can't invite to dinner`);
}
// PART C
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < friend_Names.length; i++) {
    console.log(` Hi! ${friend_Names[i]} you are still invited`);
}
// PART D
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (friend_Names.length > 0) {
    let popFriends = friend_Names.pop();
    console.log(`${popFriends} Sorry I Can't invite you for the dinner`);
}
console.log(friend_Names);
export {};
