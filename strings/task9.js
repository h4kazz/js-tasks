"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to capitalize the first letter of a string.

const text = "js string exercises";

const capitalize = (str) => {
  const firstLetter = str[0].toUpperCase();
  const restOfString = str.slice(1);

  return firstLetter + restOfString;
}

console.log(capitalize(text));
