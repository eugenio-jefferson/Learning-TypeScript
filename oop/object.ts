const johnUser = {
  name: "John",
  age: 25,
  showName: function () {
    console.log(`User name is: ${this.name}`);
  },
};

johnUser.showName();


class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = (): void => {
    console.log(`User name is: ${this.name}`);
  };
}

const user1: User = new User("Alice", 30);
user1.showName();
