// new string methods
// startsWith(), endsWith(), includes(),repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';
// starts width
console.log(person.startsWith('Pet'));
console.log(person.startsWith('peter'));

// ends width
console.log(employee.startsWith('EMP', 6));
console.log(manager.endsWith('DOE'));
console.log(manager.endsWith('MAN', 9));
// includes
console.log(manager.includes('MAN'));
console.log(manager.includes('mAN'));

const multiplyPeople = (person, amount) => person.repeat(amount);

// repeat
const people = multiplyPeople(person, 10);
console.log(people);
