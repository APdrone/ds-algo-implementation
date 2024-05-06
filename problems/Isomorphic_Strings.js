/**
 *
 * 205. Isomorphic Strings
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const tempObj = {};

  for (let i = 0; i < s.length; i++) {
    if (tempObj[s[i]]) {
      if (tempObj[s[i]] !== t[i]) {
        return false;
      }
    } else {
      console.log('tempObj--', tempObj);
      if (Object.values(tempObj).includes(t[i])) return false;
      tempObj[s[i]] = t[i];
    }
  }
  return true;
};

// console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('foo', 'bar'));
// console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));
