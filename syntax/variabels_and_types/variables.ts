// let: Declares a block-scoped variable, optionally initializing it to a value. let variables can be reassigned.
// const: Declares a block-scoped constant. Once assigned, const variables cannot be reassigned.

let number: number = 2;
console.log(`Number: ${number}`);
number = 3;
console.log(`Number: ${number}`);

const constantNumber: number = 5;
console.log(`Constant Number: ${constantNumber}`);
