"use strict";
const prompt = require("prompt-sync")();

let favoriteNumber = (a, b) => {
    if (b > a) {
        return "Too high!"
    } else if (a > b) {
        return "Too low!"
    } else {
        return "You got it!"
    } 
}

console.log("Guess my favorite number!");
const guess = parseInt(prompt("Your guess is? "))

if (guess <= 0) {
    console.log("Error: only positive numbers accepted");
} else {
    console.log(favoriteNumber(5, guess));
}