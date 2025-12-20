"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to uncamelize a string.

const uncamelize = (str, splitter = "") => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            result += splitter + char.toLowerCase();
        } else {
            result += char;
        }
    }

    return result;
};


console.log(uncamelize('helloWorld'));