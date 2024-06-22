// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let friend_names = ["Shan", "Zahid", "Haris", "Jibran", "Huzaifa"];
// PART A
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (let i = 0; i < friend_names.length; i++) {
    console.log(` Hi! ${friend_names[i]} I have found a bigger dinner table!`);
}
// PART B
// • Add one new guest to the beginning of your array.
friend_names.unshift("Wahaj");
console.log(friend_names);
// PART B
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
friend_names.splice(3, 0, "Waqas");
console.log(friend_names);
friend_names.push("Younus");
console.log(friend_names);
for (let i = 0; i < friend_names.length; i++) {
    console.log(` Hi! ${friend_names[i]} You are invited for dinner!`);
}
export {};
