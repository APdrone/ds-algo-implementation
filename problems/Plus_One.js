/**
 * 66. Plus One
 *
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let sum = '';
  for (let i = 0; i < digits.length; i++) {
    sum = sum + digits[i];
  }
  const newSum = String(BigInt(sum) + 1n);

  return newSum.split('').map((num) => Number(num));
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([7]));
console.log(plusOne([9, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([1, 0, 0]));
