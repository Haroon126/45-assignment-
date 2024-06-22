// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, model, ...args) {
    let car = { manufacturer, model };
    args.forEach(([key, val]) => (car[key] = val));
    return car;
}
// const carInfo: string | any = car("Toyota", "corolla", {
//   color: "red",
//   features: "comfort Seats",
// });
const carInfo = car("Toyota", "Carolla", ["color", "Grey"], ["year", 2020]);
const carInfo1 = car("Suzuki", "Swift", ["color", "Grey"], [" Sanroof", true]);
console.log(carInfo);
console.log(carInfo1);
export {};
