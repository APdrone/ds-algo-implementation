/**
 * @param {number} n
 * @return {number}
 */
const map = new Map();
var climbStairs = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  console.log('getting n', n, map, map.get(n));
  if (map.get(n) != null) {
    console.log('fetched ', n, map);
    return map.get(n);
  }
  total = climbStairs(n - 1) + climbStairs(n - 2);
  console.log('saved n', n, map);
  map.set(n, total);
  console.log('final map', map);
  return total;
};

console.log(climbStairs(4));
