"use strict";
const prompt = require("prompt-sync")();

const temperature = (t) => {
  switch(true) {
    case t < 0:
        return 'Freezing';
    case (t > 0 && t <= 10):
        return 'Cold';
    case (t > 10 && t <= 20):
        return 'Mild';
    case (t > 20 && t <= 30):
        return 'Warm';
    case t > 30:
        return 'Hot'
  }
}

console.log(temperature(3));
