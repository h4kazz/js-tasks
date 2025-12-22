"use strict";
const prompt = require("prompt-sync")();

const text = "Hello123! Welcome to JS 2025.";

const counter = (str) => {
  let letterCount = 0;
  let digitsCount = 0;
  let spaceCount = 0;
  let symbolCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(str[i])) {
      letterCount++;
    }

    if (/\d/.test(str[i])) {
      digitsCount++;
    }

    if (/\s/.test(str[i])) {
      spaceCount++;
    }

    if (/[^\w\s]/.test(str[i])) {
      symbolCount++;
    }
  }

  return {
    letters: letterCount,
    digits: digitsCount,
    spaces: spaceCount,
    symbols: symbolCount,
  };
};

console.log(counter(text));
