

console.log("Hello World");

// variables: let, const, var

var name = "Ahmad";
var age = 25;

// console.log(name);
// console.log(age);

// Popup Boxes:
// TODO: alert
alert("Welcome to JS-02");
alert("What a lovely day");

// TODO: confirm
// * return true or false value
var userAnswer = confirm("Are you excited for JS-02?");

console.log(userAnswer);

// TODO : prompt
var userName = prompt("What is your name?");
console.log(userName);


// if (userName.toLowerCase() === "haya") {
//     console.log("Hello Haya");
// } else {
//     console.log("Hello Stranger");
// }


// ternary if:
(userName.toLowerCase() === "haya") ? console.log("Hello Haya") : console.log("Hello Stranger");

var userAge = prompt("What is your age?"); // 19, userAge = "19"

// console.log(userAge);
console.log(typeof userAge); // string

if (userAge > 35) {
    console.log("Never too old to learn js");
    console.log("Hello ");
} else if (userAge > 20) {
    console.log("The right time to learn js");
} else {
    console.log("You are too young to learn js");
}


// (userAge > 35) ? console.log("Never too old to learn js") :
//     (userAge > 20) ? console.log("The right time to learn js") :
//         console.log("You are too young to learn js");

// add a string to a variable: 
// 1. concatenation
console.log("Welcome to our website " + userName + " nice to meet you");
// 2. interpolation
console.log(`Welcome again to our website ${userName} nice to meet you`);

