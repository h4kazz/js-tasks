"use strict";
const prompt = require("prompt-sync")();

const decideAction = (color) => {
  switch(color) {
    case 'green':
        return 'Drive';
    case 'yellow':
        return 'Wait for color to change';
    case 'red':
        return 'Stop'
    default:
        return 'Unknown light';
  }
}

console.log(decideAction('red'));
