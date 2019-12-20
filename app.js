// Arrow Functions or Fat Arrow Functions
// 'this' keyword

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 1000);
  },
};

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
anna.sayName();
