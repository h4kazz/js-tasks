"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to check whether an input is a string or not.

const text = 'string';
const arr = [1, 2, 3];

const is_string = (value) => {
  if (typeof value === 'string') {
    return true;
  } else {
    return false;
  }
}

console.log(is_string(arr));
