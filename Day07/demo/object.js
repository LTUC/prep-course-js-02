'use strict';

// Syntax of an object
let object = {
    key: "value",
    key2: "value"
}

// person object:

let haya = {
    // properties
    first_name: "Haya",
    fav_food: "Pizza",
    doesLoveCoffee: true,
    doesLoveDog: true,
    // methods:
    driving: function () {
        console.log("Haya drives Toyota");
        console.log(111111111, this);
    },
    summary: function () {
        console.log(`name is ${this.first_name}, she likes ${this.fav_food}`);
    },
}

let esam = {
    // properties
    first_name: "Esam",
    fav_food: "Mansaf",
    doesLoveCoffee: true,
    doesLoveDog: false,
    // methods:
    driving: function () {
        console.log("Esam drives Marcedc");
        console.log(111111111, this);
    },
    summary: function () {
        console.log(`name is ${this.first_name}, he likes ${this.fav_food}`);
    },
}
console.log(person);
// dot notation: 
console.log(person.first_name);
// bracket notation;
console.log(person["first_name"]);

person.summary();

// summary(); won't work

person.fav_food = "Hot Pizza";

console.log(person.fav_food);

person.age = 25;
console.log(person);

// traverse an object:
for (const key in person) {
    // console.log(key);
    // console.log(person[key]);
    console.log(`the key is ${key} has the value of ${person[key]}`);
}
