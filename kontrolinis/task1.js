"use strict";
const prompt = require("prompt-sync")();

const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];

const transformUsernames = (arr) => {
  const transformed = arr.map((user) => {
    return {
      original: user,
      lower: user.toLowerCase(),
      length: user.length,
      hasNumber: /\d/.test(user),
    };
  });

  return transformed;
};

console.log(transformUsernames(usernames));
