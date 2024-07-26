/* 
387. First Unique Character in a String
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  const sArr = s.split('');
  console.log(sArr);
  sArr.forEach((char) => (obj[char] = (obj[char] || 0) + 1));
  console.log(obj);
  for (const [key, value] of Object.entries(obj)) {
    if (value == 1) {
      console.log(key, value, sArr);
      return sArr.indexOf(key);
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
