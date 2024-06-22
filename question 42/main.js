// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ["HARRY HOUDINI", "JEAN HUGARD", "BURLING HULL"];
function make_great(magicians) {
    magicians.forEach((magicians) => {
        console.log(`${magicians} the great!`);
    });
}
make_great(magicians);
export {};
