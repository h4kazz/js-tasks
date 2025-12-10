"use strict";
const prompt = require("prompt-sync")();

const gradeToDescription = (grade) => {
  const normalized = grade.toUpperCase();

  switch(normalized) {
    case 'A':
        return 'Excellent';
    case 'B':
        return 'Good';
    case 'C':
        return 'Average';
    case 'D':
        return 'Poor';
    case 'F':
        return 'Fail'
    default:
        throw new Error('Possible grades: A, B, C, D, F')
  }
}

console.log(gradeToDescription('a'));
