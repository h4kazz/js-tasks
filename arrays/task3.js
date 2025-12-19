"use strict";
const prompt = require("prompt-sync")();

// Days count
const k = 10;

// Start money: Simas, Linas, Mantas
const startMoney = [100.00, 105.00, 120.00];

// Day expenses (diena × vaikas)
const expenses = [
  [2.50, 3.00, 1.50],
  [7.00, 5.00, 4.00],
  [3.25, 2.75, 1.57],
  [2.50, 2.35, 2.40],
  [0.00, 1.50, 2.00],
  [0.00, 0.00, 0.00],
  [4.25, 2.75, 3.25],
  [1.25, 1.00, 1.35],
  [5.25, 1.25, 6.00],
  [2.00, 1.00, 3.00]
];

// Main functions

// How much money spent per k days

const calculateTotalSpent = (expenses, days) => {
  let total = [0, 0, 0];

  for (let day = 0; day < days; day++) {
    for (let child = 0; child < 3; child++) {
      total[child] += expenses[day][child];
    }
  }

  return total;
};


// Average day expenses for child

const calculateDailyAverage = (totalSpent, days) => {
  let averages = [];

  for (let i = 0; i < totalSpent.length; i++) {
    averages[i] = totalSpent[i] / days;
  }

  return averages;
};

// How much money left for each child

const calculateMoneyLeft = (startMoney, totalSpent) => {
  let left = [];

  for (let i = 0; i < startMoney.length; i++) {
    left[i] = startMoney[i] - totalSpent[i];
  }

  return left;
};

// How many days when spent over average

const countDaysAboveAverage = (expenses, averages, days) => {
  let count = 0;
  const totalAveragePerDay = averages[0] + averages[1] + averages[2];

  for (let day = 0;  day < days; day++) {
    let daySum = 0;

    for (let child = 0; child < 3; child++) {
        daySum += expenses[day][child];
    }

    if (daySum > totalAveragePerDay) {
        count++
    }
  }

  return count;
}

// Result

const totalSpent = calculateTotalSpent(expenses, k);

console.log("Vaikinai isleido:");
console.log(
  totalSpent[0].toFixed(2),
  totalSpent[1].toFixed(2),
  totalSpent[2].toFixed(2)
);

const averages = calculateDailyAverage(totalSpent, k);
console.log("Dienos islaidu vidurkis:");
console.log(
  averages[0].toFixed(2),
  averages[1].toFixed(2),
  averages[2].toFixed(2)
);

const moneyLeft = calculateMoneyLeft(startMoney, totalSpent);
console.log("Vaikinams liko pinigu:");
console.log(
  "Simui", moneyLeft[0].toFixed(2) + ";",
  "Linui", moneyLeft[1].toFixed(2) + ";",
  "Mantui", moneyLeft[2].toFixed(2)
);

const daysAboveAverage = countDaysAboveAverage(expenses, averages, k);
console.log(
  "Diens skaicius, kai vaikinai isleido daugiau uz savo dienos vidurki:",
  daysAboveAverage
);