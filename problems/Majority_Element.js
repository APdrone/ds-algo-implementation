/***'
 * 169. Majority Element
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let size = 0,
//     keyMax;
//   let maxIndex = nums.length / 2;
//   for (let i = 0; i < nums.length; i++) {
//     if (size < nums[i]) {
//       size = nums[i];
//     }
//   }
//   const numsArr = new Array(size + 1).fill(0);

//   for (let i = 0; i < nums.length; i++) {
//     numsArr[nums[i]] = (numsArr[nums[i]] || 0) + 1;
//     // console.log(numsArr[nums[i]], maxIndex);
//     // if (numsArr[nums[i]] > maxIndex && numsArr[nums[i]] > nums[maxIndex]) {
//     //   maxIndex = nums[i];
//     // }
//   }

//   for (let [key, value] of numsArr.entries()) {
//     if (value > maxIndex) {
//       keyMax = key;
//     }
//   }

//   return keyMax;
// };

var majorityElement = function (nums) {
  let numsObj = {},
    keyMax;
  let maxIndex = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;
    // console.log(numsArr[nums[i]], maxIndex);
    // if (numsArr[nums[i]] > maxIndex && numsArr[nums[i]] > nums[maxIndex]) {
    //   maxIndex = nums[i];
    // }
  }
  //   console.log(numsObj);

  for (let [key, value] of Object.entries(numsObj)) {
    if (value > maxIndex) {
      keyMax = key;
    }
  }
  return keyMax;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2]));
