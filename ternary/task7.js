"use strict";
const prompt = require("prompt-sync")();

const userName = "use";

const checkLength = userName.length > 4 ? "Valid" : "Too short";

console.log(checkLength);
