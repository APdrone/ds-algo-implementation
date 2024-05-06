/* 
283. Move Zeroes
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
  if (nums.length == 1) {
    return nums;
  }
  let left = 0,
    right = left + 1;
  while (left < right && right < nums.length) {
    if (nums[left] == 0 && nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right = left + 1;
      console.log('if', right, left, nums);
    } else if (nums[left] == 0 && nums[right] == 0) {
      right++;
      console.log('if', right, left, nums);
    } else if (nums[left] != 0 && nums[right] == 0) {
      left++;
      right = left + 1;
      console.log('if', right, left, nums);
    } else {
      right++;
    }
  }
  return nums;
};

var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
  //   standardPointer = 0;

  //   for (let nonZeroPointer = 0; nonZeroPointer < nums.length; nonZeroPointer++) {
  //     if (nums[nonZeroPointer]) {
  //       [nums[standardPointer], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[standardPointer]];
  //       standardPointer++;
  //     }
  //   }

  //   return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([2, 1]));
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
