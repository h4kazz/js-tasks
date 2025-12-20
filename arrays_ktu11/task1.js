"user strict";
const prompt = require("prompt-sync");

const n = 7;

const techniqueScores = [5.6, 5.2, 5.5, 5.2, 5.4, 5.3, 5.7];
const artistryScores = [5.8, 5.7, 5.8, 5.4, 5.5, 5.8, 5.6];

// Main functions

// Find min score

const calculateMinScore = (array) => {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
};

// Find max score

const calculateMaxScore = (array) => {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

// Calculate average score

const caculcatAvgScore = (array, min, max) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  const average = (sum - max - min) / (array.length - 2);

  return average;
};

// Result

const minTechniqueScore = calculateMinScore(techniqueScores);
const maxTechniqueScore = calculateMaxScore(techniqueScores);

const minArtistryScore = calculateMinScore(artistryScores);
const maxArtistryScore = calculateMaxScore(artistryScores);

const averageTechniqueScore = caculcatAvgScore(
  techniqueScores,
  minTechniqueScore,
  maxTechniqueScore
);
const averageArtistryScore = caculcatAvgScore(
  artistryScores,
  minArtistryScore,
  maxArtistryScore
);

console.log(averageTechniqueScore.toFixed(1));
console.log(averageArtistryScore.toFixed(1));
