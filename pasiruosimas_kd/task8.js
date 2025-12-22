"use strict";
const prompt = require("prompt-sync")();

// Task: Merge arrays of objects by id

const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" }
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 }
];

const mergeById = (people, scores) => {
    return people.map((person) => {
        const matchingScore = scores.find(
            (score) => score.id === person.id
        );

        return {
            ...person,
            score: matchingScore.score
        };
    });
};

console.log(mergeById(people, scores));
