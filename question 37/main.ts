// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(
  size: string = "large",
  text: string = "I Love Typescript"
): void {
  console.log(`The shirt size is ${size} and text printed on it ${text}`);
}

make_shirt();
make_shirt("medium", "I Love JavaScript");
make_shirt("small", "I Like to learn python!");
