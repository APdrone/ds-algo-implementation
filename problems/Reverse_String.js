/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let left = 0; left < Math.floor(s.length / 2); left++) {
    [s[left], s[s.length - 1 - left]] = [s[s.length - 1 - left], s[left]];
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
console.log(reverseString(['a', 'b']));
