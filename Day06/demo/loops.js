'use strict';
// Second: Loops:

var seasons = ["Spring", "Summer", "Autumn", "Winter", "Summer"];

// var userInput = prompt("What is your favorite season?");


// for (var i = 0; i < seasons.length; i++) {

//     if (userInput == seasons[i]) {
//         console.log(`I found user answer, it is ${seasons[i]}`);
//         // break;
//     }
//     else {
//         // continue;
//         console.log("Not found");
//     }
//     // console.log(seasons[i]);
// }

// Third: Functions:
// Declare a function
function functionName(prams) {
    // block of code
    // return something; 
}
// call the function or envoke it 
functionName();

// First Example:
function square(number) {
    return number * number;
}
// calling, pass the value of the params, number
var result = square(3);
var secondResult = square(10);

console.log(result, secondResult);

// Second Example:
function sayHello() {
    // console.log("Hello Welcome");
    return "Hello Welcome";
}
// the variable will store the output of the function
var hello = sayHello();
console.log(hello);


// Third Example:
// find an element in an array
function findElement(arr, element) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return "Found";
        }
    }
    return "Not found";
}

var numberArr = [1, 3, 8, 9, 0, 10];

var unserNumber = prompt("Enter a number");

var elementFound = findElement(numberArr, unserNumber);


// findElement([1, 2, 3], 3);


console.log(elementFound);


// Arrow Functions
// old way:
function square(number) {
    return number * number;
}

// arrow function:
var squareArrow = (number) => {
    return number * number;
}
// if I had one line of code, I can remove the curly braces and the return keyword 
var squareArrow2 = (number) => (number * number);

console.log("New Result", squareArrow2(4));
// if I have one parameter as input, I can remove the paranthesis
var squareArrow3 = number => number * number;

console.log("New Result", squareArrow3(4));


