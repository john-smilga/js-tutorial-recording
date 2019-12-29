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
  let total = 0;

  for (const score of rest) {
    total += score;
  }

  console.log(`${name}'s average score is ${total / rest.length}`);
};

const scores = [87, 67, 56, 89];

getPerson(person.name, 34, 56, 78, 90);
getPerson(person.name, ...scores);
