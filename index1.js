"use strict";

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