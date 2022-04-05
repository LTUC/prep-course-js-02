/* Write a function to do the division operation without using the built-in division*/

function division(number, dividedBy){
    // Write you logic here.
    return;
}

/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/


function pow(x,n){
    // Write you logic here.
    return;
}

/* The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series,
the next integer is determined by summing the previous two. This gives us:

0, 1, 1, 2, 3, 5, 8, 13, ...

Write a function that take n as parameter and return the nth element in the Fibonacci Series

Example: n = 4 ==> 3, n= 0 ==> 0, n = 3 ==> 2 */

function fibonacci(n){
    // Write you logic here.
    return;
}

/* Optional 

The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Example: 
Input: n = 3, k = 3
Output: ["123", "132", "213", "231", "312", "321"] */

function permutations(n,k){
    let arr = [];
    // Write you logic here. 
    return arr
};


describe("Test division", () => {
    test("Return the division result", () => {
        expect(division(10,2)).toStrictEqual(5);
        expect(division(10,0)).toStrictEqual(0);
        expect(division(0,10)).toStrictEqual(0);
        
    })
});

describe("Test pow", () => {
    test("It should work as Math.pow(x,n)", () => {
        expect(pow(10,2)).toStrictEqual(100);
        expect(pow(10,0)).toStrictEqual(1);
        expect(pow(0,0)).toStrictEqual(1);
    })
});

describe("Test fibonacci", () => {
    test("It should implement fibonacci series logic", () => {
        expect(fibonacci(0)).toStrictEqual(0);
        expect(fibonacci(1)).toStrictEqual(1);
        expect(fibonacci(2)).toStrictEqual(1);
        expect(fibonacci(3)).toStrictEqual(2);
        expect(fibonacci(4)).toStrictEqual(3);
    })
});

describe("Test permutations", () => {
    test("It should return a list of possible combinations", () => {
        expect(permutations(3,3)).toStrictEqual(["123", "132", "213", "231", "312", "321"]);
        expect(permutations(3,0)).toStrictEqual([]);
    })
});