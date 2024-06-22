// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//PART A
// • If the alien is green, print a message that the player earned 5 points.

let alie_Colar: string = "green";

if (alie_Colar == "green") {
  console.log(`the player earned 5 points.`);
} else if (alie_Colar == "red") {
  console.log(`the player earned 10 points.`);
} else if (alie_Colar == "yellow") {
  console.log(`the player earned 15 points.`);
}

//PART B

// • If the alien is yellow, print a message that the player earned 10 points.

alie_Colar = "yellow";

if (alie_Colar == "green") {
  console.log(`the player earned 5 points.`);
} else if (alie_Colar == "yellow") {
  console.log(`the player earned 10 points.`);
} else if (alie_Colar == "red") {
  console.log(`the player earned 15 points.`);
}

// PART C

// • If the alien is red, print a message that the player earned 15 points.

alie_Colar = "red";

if (alie_Colar == "green") {
  console.log(`the player earned 5 points.`);
} else if (alie_Colar == "yellow") {
  console.log(`the player earned 10 points.`);
} else if (alie_Colar == "red") {
  console.log(`the player earned 15 points.`);
}
