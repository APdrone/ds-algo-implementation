/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const newStr = s
    .replace(/[^\w\s]|_/gi, '')
    .replace(/[\s]/g, '')
    .toLowerCase();
  console.log(newStr);
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));
console.log(isPalindrome('ab_a'));
