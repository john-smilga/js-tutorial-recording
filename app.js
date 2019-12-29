// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'los angeles', name: 'peter' };
console.log(newPerson);
