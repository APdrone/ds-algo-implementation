/**
 * 383. Ransom Note
 *
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const objNote = {};
  const objMagazine = {};

  for (let i = 0; i < ransomNote.length; i++) {
    objNote[ransomNote[i]] = (objNote[ransomNote[i]] || 0) + 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    objMagazine[magazine[i]] = (objMagazine[magazine[i]] || 0) + 1;
  }

  for (let [key, value] of Object.entries(objNote)) {
    if (!(key in objMagazine)) {
      return false;
    }
    if (objNote[key] > objMagazine[key]) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
