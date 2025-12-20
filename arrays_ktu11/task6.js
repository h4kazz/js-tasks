"user strict";
const prompt = require("prompt-sync");

const pay = 3000;
const kmPerDay = 400;
const exceeds = true;

const kmArray = [
  500, 300, 250, 420, 380, 410, 360, 330, 370, 390, 360, 370, 100, 600, 430,
  425, 429, 470, 458, 400,
];

const calculateAverage = (array) => {
  const totalKm = array.reduce((start, km) => {
    return start + km;
  }, 0);
  return totalKm / array.length;
};

const calculateDaysOfBadRestPeriod = (array, avg, option) => {
  if (option) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > avg) {
        count++;
      }
    }
    return count;
  } else {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < avg) {
        count++;
      }
    }
    return count;
  }
};

const findWorstViolationDay = (array, limit) => {
  let maxDeviation = 0;
  let worstDay = -1;

  for (let i = 0; i < array.length; i++) {
    const deviation = Math.abs(array[i] - limit);

    const overLimit = array[i] > limit * 1.2;
    const underLimit = array[i] < limit * 0.8;

    if ((overLimit || underLimit) && deviation > maxDeviation) {
      maxDeviation = deviation;
      worstDay = i + 1;
    }
  }

  return worstDay;
};

const calculateFinalSalary = (array, limit, baseSalary) => {
  let penalty = 0;

  const maxAllowed = limit * 1.2;
  const minAllowed = limit * 0.8;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxAllowed) {
      penalty += array[i] - maxAllowed;
    } else if (array[i] < minAllowed) {
      penalty += minAllowed - array[i];
    }
  }

  const finalSalary = baseSalary - penalty;
  return finalSalary;
};


console.log(`Vidutiniskai nuvaziuoja per diena: ${calculateAverage(kmArray)}`);
console.log(`Dienu kiekis, kai virsijama: ${calculateDaysOfBadRestPeriod(kmArray, calculateAverage(kmArray), exceeds)}`);
console.log(`Dienu kiekis, kai atsiliekama: ${calculateDaysOfBadRestPeriod(kmArray, calculateAverage(kmArray), !exceeds)}`);
console.log(`Menesio diena, kuria rezimas pazeidziamas labiausiai ${findWorstViolationDay(kmArray, kmPerDay)}`);
console.log(`Galutinis atlyginimas: ${calculateFinalSalary(kmArray, kmPerDay, pay)}`);
