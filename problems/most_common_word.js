/* 819. Most Common Word
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let cleanPara = paragraph.replace(/[!?',;.]/g, ' ');
  console.log(cleanPara);
  let paraObj = {};

  cleanPara.split(' ').forEach((word) => {
    let removingCasing = word.toLowerCase();
    paraObj[removingCasing] = (paraObj[removingCasing] || 0) + 1;
  });

  console.log(paraObj);

  let maxKey,
    maxValue = 0;

  for (const [key, value] of Object.entries(paraObj)) {
    if (banned.length > 0 && banned.includes(key)) continue;
    if (!key) continue;
    if (value > maxValue) {
      maxKey = key;
      maxValue = value;
    }
  }
  // return maxKey;
  console.log(maxKey);
};

// const a = mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', 'hit');
// const b = mostCommonWord('a.', 'hit');

mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']);
