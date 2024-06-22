// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
function city_country(nameofCity, nameofCountry) {
    return ` "${nameofCity}, ${nameofCountry}"`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
let result = city_country("Karachi", "Pakistan");
let result2 = city_country("Lahore", "Pakistan");
let result3 = city_country("Barlin", "Garmany");
console.log(result);
console.log(result2);
console.log(result3);
export {};
