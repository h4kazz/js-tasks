"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to concatenates a given string n times (default is 1).

function repeat(str, n = 1) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

console.log(repeat("Ha!", 3));
