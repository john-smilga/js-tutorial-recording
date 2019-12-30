// Array.from and Array.of - NOT ON THE PROTOTYPE

// of creates a new Array instance from a variable number of arguments.

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const friends = Array.of('john', 1, true);
// console.log(friends);
