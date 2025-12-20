"user strict";
const prompt = require("prompt-sync");

const heights = [
  164, 176, 173, 152, 146, 181, 190, 171, 180, 158, 160, 170, 184, 173, 165,
];
const isMax = true;

// Main functions

// Find max or min

const findMinOrMax = (array, isMax) => {
    let max;
  if (isMax) {
    max = Math.max(...array);
    return max
  } else {
    min = Math.min(...array);
    return min;
  }
}

const findAvgHeight = (array) => {
  const heightSum = array.reduce((sum, item) => {
    return sum + item
  }, 0);

  const result = Math.floor(heightSum / array.length);
  return result;
}

const findAboveAvg = (array, avg) => {
  const aboveAverage = array.filter((item) => item >  avg);
  return aboveAverage;
}

const maxHeight = findMinOrMax(heights, isMax);
const minHeight = findMinOrMax(heights, !isMax);
const averageHeight = findAvgHeight(heights);
const heightAboveAvg = findAboveAvg(heights, averageHeight);

console.log(`Didziausias ugis: ${maxHeight}`);
console.log(`Maziausias ugis: ${minHeight}`);
console.log(`Vidutinis ugis: ${averageHeight.toFixed(2)}`);

console.log(`Virsijantys vidurki ugiai: ${heightAboveAvg.join(", ")}`);
