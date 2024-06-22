// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let pesonName = "Haroon memon";
// To LowerCase
console.log(pesonName.toLowerCase());
// To UpperCase
console.log(pesonName.toUpperCase());
// To TittleCase
const titlecase = pesonName.split(' ');
const capitalize = titlecase.map((personName) => {
    return personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
});
const result = capitalize.join(' ');
console.log(result);
export {};
