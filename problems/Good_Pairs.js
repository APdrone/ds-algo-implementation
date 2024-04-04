function goodPairs(arr) {
  const result = [];
  if (arr.length === 0) return;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === ar[j]) {
        result.push((i, j));
      }
    }
  }
  return result;
}

const result = goodPairs([1, 2, 3, 1, 1, 3]);
console.log(result);
