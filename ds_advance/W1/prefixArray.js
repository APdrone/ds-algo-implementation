/** Prefix
 *
 *
 * https://projects.100xdevs.com/tracks/dsa2/dsa-1
 */

// prefix-sum: sum of all elements from 0 to i

// bruteforce

// function prefixSum(arr) {
//   let prefixSum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (j = 0; j <= i; j++) {
//       sum = sum + arr[j];
//     }
//     prefixSum[i] = sum;
//   }
//   return prefixSum;
// }

// console.log(prefixSum([2, 3, 7, 5]));

// //optimal

// function prefixSumSol(arr) {
//   if (!arr.length) {
//     return;
//   }
//   let prefixSum = [];
//   prefixSum[0] = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i];
//   }
//   return prefixSum;
// }

// console.log(prefixSumSol([2, 3, 7, 5]));

// /**
//  * 1732. Find the Highest Altitude
//  *
//  * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

//  * Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
//  */

// var largestAltitude = function (gain) {
//   if (!gain.length) {
//     return;
//   }
//   const largestGain = [];
//   let highest_altitude = 0;
//   largestGain[0] = gain[0];
//   if (highest_altitude < largestGain[0]) {
//     highest_altitude = largestGain[0];
//   }

//   for (let i = 1; i < gain.length; i++) {
//     largestGain[i] = largestGain[i - 1] + gain[i];
//     if (highest_altitude < largestGain[i]) {
//       highest_altitude = largestGain[i];
//     }
//   }
//   console.log('largestGain', largestGain);
//   return highest_altitude;
// };

// console.log(largestAltitude([-5, 1, 5, 0, -7]));
// console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
// console.log(largestAltitude([52, -91, 72]));

// var largestAltitudes = function (gain) {
//   let maxValue = 0;
//   let sum = 0;
//   for (let i = 0; i < gain.length; i++) {
//     sum += gain[i];
//     maxValue = Math.max(maxValue, sum);
//   }
//   return maxValue;
// };

// console.log(largestAltitudes([-5, 1, 5, 0, -7]));
// console.log(largestAltitudes([-4, -3, -2, -1, 4, 3, 2]));
// console.log(largestAltitudes([52, -91, 72]));

/**
 *
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const preSum = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      preSum[i] = nums[i];
      continue;
    }
    preSum[i] = preSum[i - 1] + nums[i];
  }
  console.log(preSum, 'preSum');
};

runningSum([1, 1, 1, 1]);

/**
 *
 * 724. Find Pivot Index
 *
 *
 */

nums = [1, 7, 3, 6, 5, 6];

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const leftSum = [0],
    rightSum = [];

  rightSum[nums.length - 1] = 0;
  for (let i = 1; i < nums.length; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum[i] === rightSum[i]) return i;
  }
  return -1;
};

console.log(pivotIndex(nums));
console.log(pivotIndex([1, 2, 3]));

/**
 * 1480. Running Sum of 1d Array
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const numArr = [];

  numArr[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    numArr[i] = numArr[i - 1] + nums[i];
  }
  return numArr;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

/**
 *
 *  Palindrome Number
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {};

/**
 *
 * Single Number
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;
  }

  for (let [item, keys] of Object.entries(numsObj)) {
    if (keys == 1) {
      return item;
    }
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
