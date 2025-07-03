abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;

  describe(): string {
    return `This is a ${this.name}.`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow!";
  }
}

const dog: Animal = new Dog("Dog");
const cat: Animal = new Cat("Cat");

console.log(dog.describe());
console.log(dog.makeSound());
console.log();
console.log(cat.describe());
console.log(cat.makeSound());
