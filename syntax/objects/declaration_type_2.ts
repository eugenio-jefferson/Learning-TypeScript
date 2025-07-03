// type 2 of an object declaration
// define required properties and methods using an interface to an object
interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
  greet?: () => void;
}

const person_type_2: Person = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

console.log();
if (person_type_2.greet) {
  person_type_2.greet();
}
console.log(person_type_2);
console.log(person_type_2.name);

const person_2_type_2: Person = {
  name: "Jane",
  age: 25,
  isEmployed: false,
};

console.log();
if (person_2_type_2.greet) {
  person_2_type_2.greet();
}
console.log(person_2_type_2);
console.log(person_2_type_2.name);

const arrayOfPersons: Array<Person> = [person_type_2, person_2_type_2];
console.log();
console.log(arrayOfPersons);
