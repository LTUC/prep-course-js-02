'use strict';


console.log(localStorage);
// 1. clear all of the local storage
localStorage.clear();

// 2. save an item to the local storage

localStorage.setItem("name", "Mohammad");
localStorage.setItem("age", "28");

// 3. get an item from the local storage
let retrievedName = localStorage.getItem("name");

console.log(retrievedName);

localStorage.removeItem("name");