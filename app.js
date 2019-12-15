// Template Strings/Literals

const name = "bob";
const lastName = "sanders";
const age = 25;

const phrase =
  "My full name is " +
  name +
  " " +
  lastName +
  " and I'm " +
  age +
  " years old.";
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${age *
  2} years old`;
console.log(phrase2);
