/* 434. Number of Segments in a String

*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  // s=s.trim();
  // if (!s) return 0
  return s.split(' ').filter((item) => item !== '').length;
};

console.log(countSegments('              '));
