/**
 * 231. Power of Two
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  }
  while (n > 0) {
    if (n % 2 !== 0) {
      return false;
    }
    n = Math.floor(n / 2);
    if (n == 1) {
      return true;
    }
  }
  return false;
  //   return true;
  //=> 16= 8*4*2*1 17
};

console.log(isPowerOfTwo(0));
