// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// PART A
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alienColor = "green";
if (alienColor === "green") {
    console.log(`player just earned 5 points`);
}
else {
    console.log(`player just earned 10 points`);
}
// In this case if block will be execute
// PART B
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alienColor = "red";
if (alienColor === "green") {
    console.log(`player just earned 5 points`);
}
else {
    console.log(`player just earned 10 points`);
}
// In this case else block will be execute
// PART C
// • Write one version of this program that runs the if block and another that runs the else block.
if (alienColor === "green") {
    console.log(`player just earned 5 points`);
}
else {
    console.log(`player just earned 10 points`);
}
export {};
// In this case if condition will be true so run if block otherwise else block
