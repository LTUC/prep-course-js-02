"use strict";
// Pass by reference and pass by value
// number
let x = 5;
let y = 6;

// console.log("before", x ,y)
y = x;


// console.log("after", x ,y)

x = 10;
// console.log(x); 
// console.log(y)

// pass by referernce
let person = {
    name: "Tasneem",
    age: "32",
}

let secondPerson = person;

console.log(person, secondPerson)
person.name = "Ahmad";
console.log("After changing", person)
console.log("After changing", secondPerson)


let array1 = [1, 2, 3];
let array2 = [1, 2, 3]

console.log(array1 == array2)

