// var - update, function scoped

// var name = 'john';
// console.log(name);
// name = 'peter';
// console.log(name);

function sayHello() {
  var name = 'anna';
  var lastName = 'smith';
  console.log(`Hello there ${name} ${lastName}`);
}
sayHello();

// console.log(name);
// console.log(lastName);

var value = 10;

if (value > 2) {
  var name = 'anna';
  var value = 'pants';
  console.log(`Hello there ${name}`);
}
console.log(name);
console.log(value);

if (value > 5) {
  console.log('what just happened');
}
