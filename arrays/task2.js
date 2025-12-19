"use strict";
const prompt = require("prompt-sync")();

// Data

const pumpkinCount = 5;
const  range = [2.5, 5.0];
const pumpkins = [2.00, 4.75, 3.50, 5.80, 3.00];

// Main functions

const totalWeight = (array) => {
  const weight = array.reduce((sum, item) => {
    return sum + item;
  }, 0);

  let average = weight / array.length;
  return average;
}

const acceptedPumpkins = (array, range) => {
  let min = Math.min(...range);
  let max = Math.max(...range);
  const accepted = [];

  for (let pumpkin of array) {
    if (pumpkin > min && pumpkin < max) {
        accepted.push(pumpkin);
    };
  };

  return accepted;
};

const acceptedCount = (callback) => {
  return callback.length;
}

const acceptedWeightAvg = (callback) => {
  const avgAccept = callback.reduce((sum, item) => {
    return sum + item
  }, 0);

  return avgAccept / callback.length
}

const listOfAccepted = (value) => {
  return value.join(", ");
}

// Result

const totalAverage = totalWeight(pumpkins);
const acptPumpkins = acceptedPumpkins(pumpkins, range);
const acptCount = acceptedCount(acptPumpkins);
const acceptedAverage = acceptedWeightAvg(acptPumpkins);
const list = listOfAccepted(acptPumpkins);

console.log(`Visu moliugu vidutinis svoris: ${totalAverage}`);
console.log(`I supirkima atrinkta: ${acptCount}`);
console.log(`Vidutinis vieno atrinkto moliugo svoris: ${acceptedAverage}`);
console.log(`Atrinktu moliugu  svoriu sarasas: ${list}`);

