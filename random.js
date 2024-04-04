/**
 * Tree traversal:
 * there are multiple ways to traverse tree but there are four common is :
 * -
 *
 */

function goodPairs(arr) {
  const result = [];
  if (arr.length === 0) return;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(i, j);
      }
    }
  }
  return result;
}

function goodPairs(arr) {
  const result = [];

  if (arr.length === 0) return;
  let left = 0,
    right = 1;
  while (left === arr.length && right > arr.length) {
    if ((arr[left] = arr[right])) {
      console.log(left, right);
    }
    right++;
    if (right === arr.length - 1) {
      left++;
      right = left + 1;
    }
  }
  return result;
}

const result = goodPairs([1, 2, 3, 1, 1, 3]);
console.log(result);
