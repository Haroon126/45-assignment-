// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let users = ["Eric", "John", "Bob", "Carl"];
// PART A
// • If the list is empty, print the message We need to find some users!
if (users.length === 0) {
    console.log(`We need to find some users!`);
}
else {
    while (users.length > 0) {
        // • Remove all of the usernames from your array, and make sure the correct message is printed.
        users.pop();
    }
    if (users.length === 0) {
        console.log(`We need to find some users!`);
    }
    else {
        console.log(`Great users!`);
    }
}
export {};
