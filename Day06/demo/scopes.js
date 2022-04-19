'use strict';

// Final: Scopes:
let globalLet = "I am in global scope so I can be accessed anywhere";
// 1. Block Scope: everything inside a curly braces {}

if (true) {
    let blockScope = "I am a block scope with let"; // same for const
    console.log("Inside the block", blockScope);
}

// console.log("outside the block", blockScope);


if (true) {
    var blockScopeVar = "I am a block scope with var";
    console.log("Inside the block", blockScopeVar);
}

console.log("outside the block", blockScopeVar);


// function scope:

function multiply(first, second) {
    let result = first * second;
    let message;
    if (result > 0) {
        message = "The result is positive";
    } else {
        message = "The result is negative";
    }
    return `result is ${result} and the message is ${message}`;
}

console.log(multiply(2, 3))


const PI = 3.14;

console.log(PI);

// PI = 7; // error

