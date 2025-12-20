"user strict";
const prompt = require("prompt-sync");

// Data

const n = 10;
const spentOnTickets = [2, 4, 6, 2, 10, 2, 10, 4, 6, 10];
const moneyWon = [10, 0, 100, 78, 2, 0, 8, 0, 0, 2000];

// Main functions

const calculateTotal = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }

  return sum;
};

const findMax = (array) => {
  const max = Math.max(...array);
  return max;
};

const countTickets = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i] / 2;
  }

  return sum;
};

const calculateProfit = (spent, won) => {
  return won - spent;
};

console.log(
  `Isleista: ${calculateTotal(spentOnTickets)} Lt, laimeta: ${calculateTotal(
    moneyWon
  )} Lt`
);
console.log(`Didziausias laimejimas: ${findMax(moneyWon)}`);
console.log(`Petras pirko ${countTickets(spentOnTickets)} bilietus`);
console.log(
  `Pelnas ${calculateProfit(
    calculateTotal(spentOnTickets),
    calculateTotal(moneyWon)
  )} Lt`
);
