// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_name: string[] = ["HARRY HOUDINI", "JEAN HUGARD", "BURLING HULL"];

function show_magicians(magician_name: string[]) {
  magician_name.forEach((magicianName) => {
    console.log(magicianName);
  });
}

show_magicians(magician_name);

