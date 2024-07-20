/* 1051. Height Checker


*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  if (heights.length == 0 || heights.length == 1) return 0;
  let sortedHeights = [...heights];
  let left = 0,
    right = 1,
    temp,
    checker = 0;
  while (left < sortedHeights.length && right < sortedHeights.length) {
    if (sortedHeights[left] > sortedHeights[right]) {
      temp = sortedHeights[left];
      sortedHeights[left] = sortedHeights[right];
      sortedHeights[right] = temp;
      // console.log(left, right);
    }
    right++;
    if (right == sortedHeights.length) {
      left++;
      right = left + 1;
    }
  }
  console.log(heights);
  console.log(sortedHeights);
  for (let i = 0; i < heights.length; i++) {
    if (sortedHeights[i] !== heights[i]) {
      checker++;
    }
  }
  // return checker;
  console.log(checker);
};

// heightChecker([1, 1, 4, 2, 1, 3]);
// heightChecker([5, 1, 2, 3, 4]);
// heightChecker([1, 2, 3, 4, 5]);
heightChecker([2, 1, 2, 1, 1, 2, 2, 1]);
