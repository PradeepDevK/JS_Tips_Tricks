# JS_Tips_Tricks
This repo is about JS Tricks
<hr>
=======================================================================

<hr>
* Ternary Operator
<hr>
let result =  1 > 2 ? "1 is greater than 2" : "2 is greater than 1";
console.log(result)
<hr>

<hr>
* Object Destructuring to Assign Variables
<hr>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);
<hr>
<hr>
* Spread operators
<hr>
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
<hr>
<hr>
* Template literals
<hr>
const message = `My name is ${firstName} and I am ${age} years old.`;
console.log(message);
<hr>
<hr>
* Using the Nullish Coalescing Operator for Default Values
<hr>
const foo = null;
const bar = foo ?? "default value";
console.log(bar);
<hr>
<hr>
* Merge/flatten your arrays in arrays
<hr>
const arr1 = [[10], 50, [100, [2000, 3000, [40000]]]];
const arr2 = arr1.flat(Infinity);
console.log(arr2);
<hr>
<hr>
* Preventing from code crash
<hr>
const found = [{ name: "Alex" }].find(i => i.name === 'Jim') || {};
console.log(found.name);
<hr>
<hr>
* Swap Variables
<hr>
let a = "Test";
let b = "Swap";
[a, b] = [b, a];
console.log(a, b);
<hr>
<hr>
* sort by alphabetical order
<hr>
console.log(["a", "z", "ä"].sort((a, b) => a.localeCompare(b)));
<hr>