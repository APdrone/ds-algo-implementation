/**
 * Remove Duplicates from Sorted Array
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   const numObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     numObj[nums[i]] = (numObj[nums[i]] || 0) + 1;
//   }
//   const numsArr = Object.keys(numObj).map((item) => Number(item));
//   for (let i = 0; i < nums.length; i++) {
//     if (!numsArr[i]) {
//       numsArr.push(0);
//     }
//   }

//   return numsArr;
// };

var removeDuplicates = function (nums) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = (numObj[nums[i]] || 0) + 1;
  }
  const size = nums.length;

  nums = Object.keys(numObj).map((item) => Number(item));
  const k = nums.length;
  for (let i = 0; i < size; i++) {
    if (!nums[i]) {
      nums.push(0);
    }
  }
  console.log(nums);
  return k;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var removeDuplicates2 = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log('nums', nums);
  return i + 1;
};

console.log(removeDuplicates2([1, 1, 2]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
