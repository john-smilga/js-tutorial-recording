// Rest Operator ...
// gathers/collects the items

//arrays
const fruit = ['apple', 'orange', 'lemon'];
const [first, ...random] = fruit;
console.log(first, random);

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
// const { ...rest,job  } = person;
console.log(rest);

//functions
const getPerson = (name, ...rest) => {
  console.log(name);
  console.log(rest);
};

getPerson(person.name, person.lastName, person.job);
getPerson(person.name, ...fruit);
