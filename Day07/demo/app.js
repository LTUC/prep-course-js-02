'use strict';
let allDrinks = [];

function Drink(name, ingredients, image, isCold, isHot, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;

    allDrinks.push(this);
}
Drink.prototype.render = function () {
    console.log(this.name);
    document.write(`<h1> the name of the drink is: ${this.name} </h1>`)
}

let latte = new Drink("Latte", ["milk", "coffee", "ice", "sugar"], "./assets/latte.png", true, true, 1);
let mocha = new Drink("mocha", ["milk", "coffee", "ice", "sugar"], "./assets/mocha.png", true, false, 2);
let hotChocalte = new Drink("hot chocalte", ["milk", "coffee", "ice", "sugar"], "./assets/mocha.png", true, false, 2)

// ctrl + ? will comment multipy lines
// console.log(latte);
// console.log(mocha);
console.log(allDrinks);
latte.render();
mocha.render();