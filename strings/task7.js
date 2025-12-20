"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to hide email addresses to protect from unauthorized user.

const email = "robin_singh@example.com";

const protectEmail = (email) => {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  const visiblePart = username.substring(0, 5);
  return visiblePart + "...@" + domain;
}

console.log(protectEmail(email));
