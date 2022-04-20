'use strict';
// hoisting:
// Interpreter move all declaration of functions to the top of their scopes before executing the code

console.log("before");
hositing();

// function: 
function hositing() {
    console.log("Call me where you need me")
}

console.log("after");
hositing()


number = 7;
console.log(number);


var number; // it will work


secondNumber = 8;
console.log(secondNumber);

let secondNumber; // it won't work






