// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// PART A

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let friend_names: string[] = ["Shan", "Wasey", "Haris", "Jibran", "Huzaifa"];

const notMakingDinner: string = friend_names[1];

console.log(`${notMakingDinner} is not making dinner`);

// PART B

//  • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let newPerson: string[] = friend_names.splice(1, 1, "Zahid");

console.log(friend_names);

// PART C

// • Print a second set of invitation messages, one for each person who is still in your list.

friend_names.forEach((invitedPerson: string): void => {
  console.log(`Hi ${invitedPerson} You are Invited for Dinner!`);
});



