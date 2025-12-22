"use strict";

const input = document.getElementById("input");
const select = document.getElementById("select");
const button = document.getElementById("convert-btn");
const resultPara = document.getElementById("result");

const convertTemp = () => {
  const mode = select.value;
  let result;

  const inputValue = input.value;

  if (mode === "cel") {
    result = (inputValue * (9 / 5)) + 32;
    resultPara.textContent = result + "° Farenheit";
  }

  if (mode === "far") {
    result = (inputValue - 32) * (5 / 9);
    resultPara.textContent = result.toFixed() + "° Celsius";
  }
}

button.addEventListener("click", convertTemp)