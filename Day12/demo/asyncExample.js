'use strict';

// sync:  in order
console.log("First");
console.log("Second");
console.log("Third");

// async: 
setTimeout(() => {
    console.log("First");
}, 3000); // 3 seconds


setTimeout(() => {
    console.log("Second");
}, 2000); // 2 seconds


console.log("Third");


// async second example:

function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
    f1();
}

f2();