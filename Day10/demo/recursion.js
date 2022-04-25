"use strict";
// Recursion:

// First Example: Factorial:
// without recusrion:
// fact(4) = 4*3*2*1
function factWithLoop(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        // console.log(i)
        result *= i;
        // result = result * i
    }

    return result
}
// console.log(factWithLoop(4))

function factWithWhile(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    let result = 1;
    while (n > 1) {
        result = result * n;
        n = n - 1;
    }
    return result;
}

// console.log( factWithWhile(4))
// Factorial with Recusion
function factWithRec(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else {
        return n * factWithRec(n - 1);
    }
}

// console.log(11111,factWithRec(1))
function sum(n) {
    if (n == 1) return 1;
    else {
        return n + sum(n - 1);
    }
}

// console.log(sum(4))
// Example 3: Fibonati:

function fib(n) {
    // if(n==0 ) return 0
    // if(n == 1) return 1
    if (n == 0 || n == 1) return n;
    else return fib(n - 1) + fib(n - 2);
}
// console.log(fib(14))
const fibArrow = n => (n < 2) ? n : fib(n - 1) + fib(n - 2);
console.log(fibArrow(14))
