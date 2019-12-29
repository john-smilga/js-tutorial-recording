// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const numbers = [23, 45, 66, 88, 2345];
// const biggest = Math.max(2, 3, 3, 4);
const biggest = Math.max(...numbers);

console.log(biggest);
