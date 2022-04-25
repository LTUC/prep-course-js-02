'use strict';

let string = "Java is 2 JavaScript what Car is to Carpet";

// let regex = /java/i
// let regex = /^Java/i
let regex = /Carpet$/

// ^ will check the start of the sting
// $ will check the end of the string


// i: case insensetive
// testing if the sting has the regex, use a method called test
// if it an array, I have to loop

let result = regex.test(string)

console.log(result);

// let checkNumber = /\d/
// let checkNumber = /[0-5]/
// let checkLetter = /\w/
// let checkLetter = /\W/
let checkCap = /[A-Z]/
let checkSmallCap = /[a-z]/
let all = /[A-Z][a-z][0-9]/

// d : digits
// w : words
// W : sepecial char, spaces included
// console.log(checkLetter.test(string));

// how many java I have in my string
// let regex2 = /java/ig
// let regex2 = /\b/g
let regex2 = /\W/gm
// m: multiple lines
// break between words, boundary
// g: global: search the whole string, don't stop at the first match

string.match(regex2)
// console.log(string.match(regex2))

// replace: 

// console.log(string.replace(regex2, "-"))

