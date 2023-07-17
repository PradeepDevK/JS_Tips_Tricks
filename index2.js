"use strict";

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

