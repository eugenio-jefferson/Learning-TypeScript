let userName: string = "Eugênio Jefferson";
let age: number = 22;
let isStudent: boolean = true;
let hobbies: string[] = ["coding", "reading", "gaming"];

let user: { name: string; age: number; isStudent: boolean; hobbies: string[] } =
  {
    name: userName,
    age: age,
    isStudent: isStudent,
    hobbies: hobbies,
  };

console.log(user);

// string or null
let nullableString: string | null;
nullableString = "Hello, World!";
console.log(`type: '${typeof nullableString}', value: '${nullableString}'`);
nullableString = null;
console.log(`type: '${typeof nullableString}', value: '${nullableString}'`);

// numbers
let decimalNumber: number = 10.5;
let hexNumber: number = 0x1a; // Hexadecimal
let binaryNumber: number = 0b1010; // Binary
let octalNumber: number = 0o12; // Octal
console.log(
  `\nDecimal: ${decimalNumber}, Hex: ${hexNumber}, Binary: ${binaryNumber}, Octal: ${octalNumber}`
);

// strings
let singleQuoteString: string = 'Hello, "World"!';
let doubleQuoteString: string = "Hello, 'World'!";
let templateString: string = `Hello, ${userName}! You are ${age} years old.`;
console.log(
  `\nSingle Quote: ${singleQuoteString} \nDouble Quote: ${doubleQuoteString}, \nTemplate String: ${templateString}`
);

// boolean
let isActive: boolean = true;
let isLoggedIn: boolean = false;
console.log(`\nIs Active: ${isActive}, Is Logged In: ${isLoggedIn}`);

// arrays
let numberArray: number[] = [1, 2, 3, 4, 5];
let stringArray: string[] = ["apple", "banana", "cherry"];
let mixedArray: (number | string)[] = [1, "two", 3, "four"];
console.log(
  `\nNumber Array: ${numberArray} \nString Array: ${stringArray} \nMixed Array: ${mixedArray}`
);

// tuples
let userTuple: [string, number, boolean] = ["Eugênio", 22, true];
console.log(`\nUser Tuple: ${userTuple}`);

// enums
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
let favoriteColor: Color = Color.Green;
console.log(`\nFavorite Color: ${favoriteColor}`);

// any type
let anyVariable: any = "This can be anything";
console.log(`\nAny Variable: '${anyVariable}', type: '${typeof anyVariable}'`);
anyVariable = 42;
console.log(`Any Variable: '${anyVariable}', type: '${typeof anyVariable}'`);
anyVariable = true;
console.log(`Any Variable: '${anyVariable}', type: '${typeof anyVariable}'`);
