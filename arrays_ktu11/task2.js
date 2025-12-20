"user strict";
const prompt = require("prompt-sync");

const n = 6;
const deposits = [1987.23, 456.57, 235.89, 789.48, 1987564.97, 978687.67];

const findMinDeposit = (array) => {
  const min = Math.min(...array);
  return min;
};

const findMaxDeposit = (array) => {
  const max = Math.max(...array);
  return max;
};

const findAvgDeposit = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  const average = sum / array.length;
  return average;
};

const findDepositCode = (arrayOfDeposits, deposit) => {
  const code = arrayOfDeposits.indexOf(deposit) + 1;
  return code;
};

const depositWithCodes = (array) => {
  let depositsArray = [];

  for (let i = 0; i < array.length; i++) {
    depositsArray.push({
      code: i + 1,
      deposit: deposits[i],
    });
  }

  return depositsArray;
};

const sorted = depositWithCodes(deposits).sort((a, b) => {
  return b.deposit - a.deposit;
});

console.log(
  `Didziausias indelis: ${findMaxDeposit(deposits)}    kodas ${findDepositCode(
    deposits,
    findMaxDeposit(deposits)
  )}`
);
console.log(
  `Maziausias indelis: ${findMinDeposit(
    deposits
  )}         kodas ${findDepositCode(deposits, findMinDeposit(deposits))}`
);
console.log(`Vidutinis indelio dydis: ${findAvgDeposit(deposits)}`);

console.log("Kodas    Indelis");
for (let item of sorted) {
  console.log(item.code + "        " + item.deposit);
}
