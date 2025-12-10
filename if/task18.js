"use strict";
const prompt = require("prompt-sync")();

const daysInMonthByNumber = (month) => {
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Expected a month number from 1-12, received ${month}`)
  }

  if (month = 1) {
    return 31;
  } else if (month = 2) {
    return 29;
  } else if (month = 3) {
    return 31;
  } else if (month = 4) {
    return 30;
  } else if (month = 5) {
    return 31;
  } else if (month = 6) {
    return 30
  } else if (month = 7) {
    return 31;
  } else if (month = 8) {
    return 31;
  } else if (month = 9) {
    return 30;
  } else if (month = 10) {
    return 31;
  } else if (month = 11) {
    return 30;
  } else return 31;
}

console.log(daysInMonthByNumber(13));
