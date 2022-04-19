'use strict';
//First: arrays 

var firstArray = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(firstArray);

// accessing an element in an array

var favDay = firstArray[3]; // 3 is the number of the index

console.log(`My favorite day is ${favDay}`);
console.log(`the length of the array is ${firstArray.length}`);

console.log(`The last element in the array is ${firstArray[firstArray.length - 1]}`);

// add an element to my array

firstArray[6] = "Today"; // adding a new element
firstArray[0] = "Friday"; // updating the first element
firstArray[10] = "Saturday";

console.log(firstArray);

// array methods:
var favTopic = [];
// push:  add an element to end of the array
favTopic.push("JavaScript");
favTopic.push("HTML");


// unshift: add an element to the beginning of the array
favTopic.unshift("CSS");

// pop: remove the last element of the array
favTopic.pop();

// shift: remove the first element of the array
favTopic.shift();

// toSting: convert all of the array to string
favTopic.toString();
console.log(1, firstArray);
console.log(2, firstArray.toString());

