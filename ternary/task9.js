"use strict";
const prompt = require("prompt-sync")();

const score = 30;

const resultMessage = score >= 50 ? "Pass" : "Fail";

console.log(resultMessage);
