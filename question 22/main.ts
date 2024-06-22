// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const numbers: string[] = ["Alice", "Bobs", "Stave", "John"];
console.log(numbers[4]);
// International error : arrays are zero index base but here accessing out of bonds.

// Now corrct
console.log(numbers[3]);
// output
// John
