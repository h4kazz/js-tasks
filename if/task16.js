"use strict";
const prompt = require("prompt-sync")();

let rockPaperScissors = (player1, player2) => {
    if ( player1 === player2) return 'draw'

    if ((player1 === 'rock' && player2 === 'scissors') || (player1 === 'scissors' && player2 === 'paper') || (player1 === 'paper' && player2 === 'rock')) {
        return 'player1'
    }
    
    return 'player2'
}

rockPaperScissors('rock', 'scissors')
rockPaperScissors('scissors', 'paper')
rockPaperScissors('paper', 'paper')

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'paper'));
