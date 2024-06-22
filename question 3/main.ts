// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let pesonName : string = "Haroon memon"


// To LowerCase
console.log(pesonName.toLowerCase())

// To UpperCase

console.log(pesonName.toUpperCase())

// To TittleCase


const titlecase : string [] =  pesonName.split(' ') 
const capitalize : string [] =  titlecase.map((personName : string) : string => {
return personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()
})

const result : string = capitalize.join(' ');
console.log(result);

 
  