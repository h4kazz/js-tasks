"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to check whether a string is blank or not.

const text = "";

const isBlank = (str) => {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(text));
