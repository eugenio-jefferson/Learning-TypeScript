interface IClass {
  showName: () => void;
  showAge: () => void;
}

class ClassA implements IClass {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = (): void => {
    console.log(`ClassA name is: ${this.name}`);
  };

  showAge = (): void => {
    console.log(`ClassA age is: ${this.age}`);
  };
  
  setName = (name: string): void => {
    this.name = name;
  }
  
  setAge = (age: number): void => {
    this.age = age;
  }
}

class ClassB extends ClassA {
  protected occupation: string;

  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }

  showOccupation = (): void => {
    console.log(`ClassB occupation is: ${this.occupation}`);
  };
  
  setOccupation = (occupation: string): void => {
    this.occupation = occupation;
  }
}


const classA: ClassA = new ClassA("John", 30);
const classB: ClassA = new ClassB("Alice", 28, "Engineer");

console.log(classA)
console.log(classB)

classA.setName("John Mike");
classA.showName();