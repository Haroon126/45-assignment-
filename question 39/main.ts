// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

function city_country(nameofCity: string, nameofCountry: string): string {
  return ` "${nameofCity}, ${nameofCountry}"`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned.

let result: string = city_country("Karachi", "Pakistan");
let result2: string = city_country("Lahore", "Pakistan");
let result3: string = city_country("Barlin", "Garmany");
console.log(result);
console.log(result2);
console.log(result3);
