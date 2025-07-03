const array: Array<number> = [1, 2, 3, 4, 5];

console.log("Original Array:", array);
array.push(6);
console.log("After Push:", array);
array.pop();
console.log("After Pop:", array);

console.log(
  "\nFinding first number 3: ",
  array.find((num) => num === 3)
);

console.log();
array.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});
