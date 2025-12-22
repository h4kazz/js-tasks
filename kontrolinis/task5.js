"use strict";
const prompt = require("prompt-sync")();

const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];

const determineMessageType = (arr) => {
  const transformed = arr.map((battery) => {
    if (battery.priority === 3) {
      if (!battery.read) {
        return {
          ...battery,
          messageType: "critical",
        };
      } else {
        return {
          ...battery,
          messageType: "read",
        };
      }
    } else if (battery.priority === 2) {
      if (!battery.read) {
        return {
          ...battery,
          messageType: "warning",
        };
      } else {
        return {
          ...battery,
          messageType: "read",
        };
      }
    } else {
      if (!battery.read) {
        return {
          ...battery,
          messageType: "normal",
        };
      } else {
        return {
          ...battery,
          messageType: "read",
        };
      }
    }
  });

  return transformed;
};

console.log(determineMessageType(notifications));
