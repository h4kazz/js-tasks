"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to parameterize a string.

const text = "Robin Singh from USA.";

const stringParametrizer = (str) => {
  const lower = str.toLowerCase();
  const words = lower.split(' ');
  const dashed = words.join("-");

  return dashed;
}

console.log(stringParametrizer(text));
