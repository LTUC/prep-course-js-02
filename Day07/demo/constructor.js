"use strict";
// constructor:

function Person(name, food, doesLoveCoffee, doesLoveDog) {
    this.first_name = name;
    this.fav_food = food;
    this.doesLoveCoffee = doesLoveCoffee;
    this.doesLoveDog = doesLoveDog;
    // this.summary = function () {
    //     console.log(`name is ${this.first_name}, she/he likes ${this.fav_food}`);
    // };
}
// prototype: used to link methods to construtor
Person.prototype.summary = function () {
    console.log(`name is ${this.first_name}, she/he likes ${this.fav_food}`);
};
// Person.prototype.age = 24;

let haya = new Person("Haya", "Pizza", true, true); // new instance
let esam = new Person("Esam", "Esam", true, false);
console.log(haya); // it is an object
console.log(esam);

haya.summary();
