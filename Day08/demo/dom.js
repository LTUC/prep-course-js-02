'use strict';

// console.log(document);

let header = document.getElementById("headerID");

console.log(header);

// 1. created the element
let heading = document.createElement("h1");
// 2. give it a value
heading.textContent = "ASAC Coffee House";
// 3. put the h1 inside the header / append
header.appendChild(heading);
// 4. add styling:
heading.style.color = "brown"

// console.log(heading);
// create a p element:
// 1. create the element:
let par = document.createElement('p');
//2.  give it a value:
par.textContent = "Welcome to our Coffee";
// 3. append the p to the header
header.appendChild(par);


// 1. create the element:
// <img src="" alt="" style="">
let image = document.createElement('img');
//2. give it a value:
image.src = "https://media.istockphoto.com/vectors/coffee-cup-icon-vector-design-illustration-cup-of-coffee-icon-vector-vector-id1267680005"
// 3. append the image to the header
header.appendChild(image)
// 4. add styling
image.style.width = "70px";
image.class = "imageClass";
image.id = "imageID";

