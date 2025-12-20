"use strict";
const prompt = require("prompt-sync")();

let string = "Hello, my name is Matas";

// Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks.

const replaceFunc = (string) => {
  return string.replaceAll(" ", "");
};

console.log(replaceFunc(string));

 //Get Digits: Create a function that given a string, returns the integer made from the strings digits.

const getDigit = (string) => {
  return string.length;
};

console.log(getDigit(replaceFunc(string)));

// Acronyms: Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized)

const createAcronym = (text) => {
  const words = text.split(" ");
  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  return acronym;
};

console.log(createAcronym("As soon as possible"));

// Count Non-Spaces: Create a function that, given a string, returns the number of non-space characters found in the string.

const countNonSpaces = (string) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      count++;
    }
  }
  return count;
};

console.log(countNonSpaces("As soon as possible"));

//Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

let array = ["list", "keyboard", "mouse", "monitor", "house"];

const removeShortStrings = (array, digit) => {
    let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > digit) {
        result.push(array[i])
    }
  }
  return result;
}

console.log(removeShortStrings(array, 4));