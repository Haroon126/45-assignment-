// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["HARRY HOUDINI", "JEAN HUGARD", "BURLING HULL"];

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  magicians.forEach((magicians): void => {
    great_magicians.push(magicians + " THE GREAT");
  });
  return great_magicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magicians): void => {
    console.log(magicians);
  });
}

let great_magicians: string[] = make_great(magicians.slice());
console.log(great_magicians);
show_magicians(magicians);
show_magicians(great_magicians);
