// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

const [john, , enemy, bob, susan] = friends;
console.log(john, enemy, bob, susan);
