/**
 *
 * 258. Add Digits
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let sum = 0,
    n = 0;
  if (num < 10) {
    return num;
  }
  //   console.log('num-1', num);
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
    // console.log('inside', sum, num);
    if (num === 0 && sum >= 10) {
      num = sum;
      sum = 0;
    }
  }
  return sum;
};

console.log(addDigits(38));
console.log(addDigits(0));
console.log(addDigits(19));
