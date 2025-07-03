const arrayNumber: Array<number> = [1, 2, 3, 4, 5];
const arrayString: readonly string[] = ["apple", "banana", "cherry"];
const arrayMixed: (number | string)[] = [1, "two", 3, "four"];

console.log("Array of Numbers:", arrayNumber);
console.log("Element at index 2:", arrayNumber[2]);
console.log("Array length:", arrayNumber.length);