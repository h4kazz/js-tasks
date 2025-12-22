"use strict";
const prompt = require("prompt-sync")();

const products = [
  "  Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger ",
  "USB cable",
];

const transformed = (arr) => {
  let transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].trim();
    item = item.replace("-", " ");
    item = item.toLowerCase();
    transformedArray.push(item);
  }

  return transformedArray;
};

console.log(transformed(products));
