// type 1 of an object declaration
let person_type_1 = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

console.log();
console.log(person_type_1.greet());
console.log(person_type_1);
console.log(person_type_1.name);
