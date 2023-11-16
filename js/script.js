'use strict'

const body = document.querySelector("body");
const btn = document.querySelector(".change-color-btn");
const out = document.querySelector(".current-color");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
    return `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`
}

btn.addEventListener("click", function (e) {
    e.preventDefault();

    body.style.background = `linear-gradient(${randomColor()}, ${randomColor()})`;

    out.innerHTML = body.style.background = `linear-gradient(${randomColor()}, ${randomColor()})`;

});

//========================================================================================================================================================
//========================================================================================================================================================
