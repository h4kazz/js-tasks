"use strict";
const prompt = require("prompt-sync")();

// Task: Deep destructuring of nested objects

const data = {
  status: "ok",
  user: {
    id: 15,
    profile: {
      name: "Laura",
      email: "laura@example.com"
    },
    roles: ["user", "editor"]
  }
};

const {
    status,
    user: {
        id: userId,
        profile: { name },
        roles: [primaryRole]
    }
} = data;

console.log(status);
console.log(userId);
console.log(name);
console.log(primaryRole);
