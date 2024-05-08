/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(' ');
  if (pattern.length !== s.length) {
    return false;
  }
  const objPattern = {};

  for (let i = 0; i < pattern.length; i++) {
    if (objPattern[pattern[i]]) {
      if (objPattern[pattern[i]] !== s[i]) {
        return false;
      }
    } else {
      if (Object.values(objPattern).includes(s[i])) {
        return false;
      }
      objPattern[pattern[i]] = s[i];
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));

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
