"use strict";
const prompt = require("prompt-sync")();

let calculateAvgScore = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

let decideWinner = (player1, player2, player3) => {
    if (player1 > player2 && player1 > player3) {
        console.log(`John wins with average score: ${johnAvg}}`);
    } else if (player2 > player1 && player2 > player3) {
        console.log(`Mike wins with average score: ${mikeAvg}`);
    } else if (player3 > player1 && player3 > player2) {
        console.log(`Mary wins with average score: ${maryAvg}`);
    } else {
        console.log(`There is a draw, all players have average score: ${johnAvg}`);
    }
}

let johnAvg = calculateAvgScore(89, 120, 103);
let mikeAvg = calculateAvgScore(116, 94, 132);
let maryAvg = calculateAvgScore(97, 132, 105);

decideWinner(johnAvg, mikeAvg, maryAvg);