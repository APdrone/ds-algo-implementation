/**
 * Handing range- we will use prefix sum + frequency array , we use it when handling multiple range and we need to find intersection in that
 *
 * 1854. Maximum Population Year
 * https://leetcode.com/problems/maximum-population-year/description/
 *
 *
 */
logs = [
  [1993, 1999],
  [2000, 2010],
];

// logs = [
//   [1950, 1961],
//   [1960, 1971],
//   [1970, 1981],
// ];

const logsObj = {};

for (let i = 0; i < logs.length; i++) {
  logsObj[logs[i][0]] = (logsObj[logs[i][0]] || 0) + 1;

  logsObj[logs[i][1]] = (logsObj[logs[i][1]] || 0) - 1;
}

console.log(logsObj);
const gain = [];
gain[0] = Object.values(logsObj)[0];
const population = Object.values(logsObj);

let maxValue = Object.values(logsObj)[0];
let minYear = Object.keys(logsObj)[0];

for (let i = 1; i < population.length; i++) {
  gain[i] = gain[i - 1] + population[i];
  if (gain[i] > maxValue) {
    maxValue = gain[i];
    minYear = Object.keys(logsObj)[i];
  }
}

console.log(gain);
console.log(maxValue, minYear);

//Solution 2

logs1 = [
  [1993, 1999],
  [2000, 2010],
];

logs2 = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

const maximumPopulation = function (logs) {
  let count = new Array(101).fill(0);
  for (const [birth, death] of logs) {
    count[birth - 1950]++;
    count[death - 1950]--;
  }
  console.log('count', count);

  let max = 0;

  for (let i = 1; i < 101; i++) {
    count[i] = count[i] + count[i - 1];
    if (count[i] > count[max]) {
      max = i;
    }
  }
  console.log(max + 1950);
};

// maximumPopulation(logs2);
