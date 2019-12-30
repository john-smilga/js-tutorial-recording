// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const udemy = 'udemy';
// console.log(Array.from(udemy));

function getTotal() {
  // console.log(arguments);
  // console.log(Array.from(arguments));
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

getTotal(10, 11, 24);
