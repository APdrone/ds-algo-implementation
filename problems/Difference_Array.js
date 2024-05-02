/**
 * 2535. Difference Between Element Sum and Digit Sum of an Array
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let digitSum = 0,
    elementSum = 0;
  for (let i = 0; i < nums.length; i++) {
    digitSum += nums[i];
    while (nums[i] > 0) {
      if (nums[i] > 9) {
        elementSum = elementSum + (nums[i] % 10);
        nums[i] = Math.floor(nums[i] / 10);
      } else {
        elementSum += nums[i];
        break;
      }
    }
  }

  return Math.abs(digitSum - elementSum);
};

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
