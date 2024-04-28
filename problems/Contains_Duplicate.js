/**
 * @param {number[]} nums
 * @return {boolean}
 */

//using object
// var containsDuplicate = function (nums) {
//   const numObj = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (numObj[nums[i]]) {
//       return true;
//     } else {
//       numObj[nums[i]] = 1;
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  const numsArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (numsArr[nums[i]]) {
      return true;
    } else {
      numsArr[nums[i]] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
