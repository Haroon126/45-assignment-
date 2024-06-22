// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//PART A
// • Make a list of five or more usernames called current_users.

let current_users: string[] = ["john", "Carl", "Bob", "Staven", "Eric"];

//PART B

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users: string[] = current_users
  .slice(0, 2)
  .concat(["Hennery", "Mark", "Mick"]);

// PART C

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} is will need to enter new username`);
  } else {
    console.log(`${newUser} is available`);
  }
});

// PART D
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
