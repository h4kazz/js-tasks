"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to extract a specified number of characters from a string.

const text = "Robin Singh";

const truncateString = (str, num) => {
  return str.substring(0, num);
}

console.log(truncateString(text, 4));
