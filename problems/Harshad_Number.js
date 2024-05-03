/**
 *
 * 3099. Harshad Number
 */

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = 0;
  let temp = x;
  while (x > 0) {
    sum = sum + (x % 10);
    x = Math.floor(x / 10);
  }
  if (temp % sum === 0) {
    return sum;
  } else {
    return -1;
  }
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));
