"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to split a string and convert it into an array of words.

const text = "Robin Singh";

const convertToArray = (str) => {
  return str.split(" ");
}

console.log(convertToArray(text));
