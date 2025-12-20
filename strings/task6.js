"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to convert a string in abbreviated form.

const name = "Robin Singh";

const abbreviateName = (str) => {
  const parts = str.split(" ");
  const firstName = parts[0];
  const lastNameInitial = parts[1][0];

  return firstName + " " + lastNameInitial + "."
}

console.log(abbreviateName(name));
