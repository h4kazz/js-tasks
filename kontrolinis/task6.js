"use strict";
const prompt = require("prompt-sync")();

const arrOfArrs = [
  ["aaron", "ake", "anna", "aje"],
  ["becky", "ben", "bright"],
  ["cara", "chris"],
  ["david", "daniel", "danielle", "djenue"],
];

const arrayFlattener = (arr) => {
  const result = arr.reduce((accumulator, arrItem) => {
    return accumulator.concat(arrItem);
  }, []);

  return result;
};

console.log(arrayFlattener(arrOfArrs));
