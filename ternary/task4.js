"use strict";
const prompt = require("prompt-sync")();

const isLoggedIn = false;

const checkLogin = isLoggedIn ? "Welcome back!" : "Please log in!";

console.log(checkLogin);
