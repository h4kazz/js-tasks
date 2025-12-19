"use strict";
const prompt = require("prompt-sync")();

// Data

const data = [
  { gender: "v", price: 102.56 },
  { gender: "m", price: 215.7 },
  { gender: "m", price: 99.21 },
  { gender: "v", price: 200.0 },
  { gender: "v", price: 175.99 },
];

const men = "v";
const women = "m";

// Main functions

const calulateShoes = (array, gender) => {
  const filterByGender = array.filter((item) => item.gender === gender);
  const totalPrice = filterByGender.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return totalPrice;
};

const calculateAvgShoes = (array, gender) => {
    let filterByGender;
    let totalPrice;

  if (gender != men && gender != women) {
    throw new Error("Invalid function parameter");
  } else {
    filterByGender = array.filter((item) => item.gender === gender)
    totalPrice = filterByGender.reduce((sum, item) => {
        return sum + item.price;
    }, 0)
  }
  const average = totalPrice / filterByGender.length;
  return average;
}

const calculateTotalShoes = (callback1, callback2) => {
  return callback1 + callback2;
}

// Assigning variables

const totalMenShoes = calulateShoes(data, men);
const totalWomenShoes = calulateShoes(data, women);

const avgMenSgoes = calculateAvgShoes(data, men).toFixed(2);
const avgWomenSgoes = calculateAvgShoes(data, women).toFixed(2);

const totalSales = calculateTotalShoes(totalMenShoes, totalWomenShoes);

// Result

console.log("Vyriska avalyne:");
console.log(`  -- per diena parduota uz ${totalMenShoes} Lt`);
console.log(`  -- vidutiniskai batu pora kainavo ${avgMenSgoes} Lt`);

console.log("Moteriska avalyne:");
console.log(`  -- per diena parduota uz ${totalWomenShoes} Lt`);
console.log(`  -- vidutiniskai batu pora kainavo ${avgWomenSgoes} Lt`);

console.log(`Is viso per diena buvo parduota avalynes uz ${totalSales}`);