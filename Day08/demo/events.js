'use strict';

// Events Handeling
// When I press a button, it alret hello meesage
// 1. get the element 
let btnEl = document.getElementById("btn");
let btnEl2 = document.getElementById("btn2");

// 2. add an event listener to this button

btnEl.addEventListener("click", handleClick);


function handleClick() {
    alert("Hello welcome, Ya hala")
}
// how to Emoji: press the Windows Key + ;
// a surpise event:
btnEl2.addEventListener("mouseover", handleMouseOver);


function handleMouseOver(event) {
    btnEl2.textContent = "🙌😍😉";

    // alert("Were you surprise> ")
}

// back to the surprise 
btnEl2.addEventListener("mouseleave", handleMouseOut);

function handleMouseOut() {
    btnEl2.textContent = "Surprise";
}

