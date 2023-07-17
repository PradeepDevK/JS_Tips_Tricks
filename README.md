# JS_Tips_Tricks
This repo is about JS Tricks

=======================================================================

/**
 * Ternary Operator
 */
let result =  1 > 2 ? "1 is greater than 2" : "2 is greater than 1";
console.log(result)

/**
 * Object Destructuring to Assign Variables
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

/**
 * Spread operators
 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

/**
 * Template literals
 */
const message = `My name is ${firstName} and I am ${age} years old.`;
console.log(message);

/**
 * Using the Nullish Coalescing Operator for Default Values
 */
const foo = null;
const bar = foo ?? "default value";
console.log(bar);

/**
 * Merge/flatten your arrays in arrays
 */
const arr1 = [[10], 50, [100, [2000, 3000, [40000]]]];
const arr2 = arr1.flat(Infinity);
console.log(arr2);

/**
 * Preventing from code crash
 */
const found = [{ name: "Alex" }].find(i => i.name === 'Jim') || {};
console.log(found.name);

/**
 * Swap Variables
 */
let a = "Test";
let b = "Swap";
[a, b] = [b, a];
console.log(a, b);

/**
 * sort by alphabetical order
 */
console.log(["a", "z", "ä"].sort((a, b) => a.localeCompare(b)));