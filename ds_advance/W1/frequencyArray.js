const arr = [1, 2, 1, 1, 1, 3, 3];

size = 0;

for (let i = 0; i < arr.length; i++) {
  if (size < arr[i]) {
    size = arr[i];
  }
}

console.log(size);

// const freqArr = new Array(size + 1);

let maxSize = 0;
let maxIndex = 0;

const freqArr = new Array(size + 1).fill(0);

for (let j = 0; j < arr.length; j++) {
  //   console.log(freqArr);
  if (!freqArr[arr[j]]) {
    freqArr[arr[j]] = 1;
    // console.log(freqArr);
  } else {
    freqArr[arr[j]] = freqArr[arr[j]] + 1;
  }
  if (freqArr[arr[j]] > maxSize) {
    maxSize = freqArr[arr[j]];
    maxIndex = arr[j];
  }
}

console.log(freqArr);
console.log(maxSize, maxIndex);

/* 
Remember, the size of the array is dependent on the array elements so in case the array elements are very large (~10^8) then don’t use this technique directly otherwise it will give Memory Limit Exceeded errors.


Frequency array is a special form of hash table. So we can also use it with hashing for other data types or large integer values. Hashing is a technique of mapping one thing to another using a hash function. A hash function takes an argument of one type, and converts it into another value either of same type or different type. Generally, the output of hash functions is integers.

*/

const objArr = {};

for (let i = 0; i < arr.length; i++) {
  objArr[arr[i]] = (objArr[arr[i]] || 0) + 1;
}

console.log(objArr);

let maxKey = 0;
let maxValue = 0;
for (let [key, value] of Object.entries(objArr)) {
  if (objArr[key] > maxValue) {
    maxValue = value;
    maxKey = key;
  }
}

console.log(maxKey, maxValue);

/* 
2: Most frequent character

Given a string containing lower case english alphabets, what is the most occurring character?

Input: s = "hello"
Output: l
Explanation: Frequencies - 'h': 1, 'e': 1, 'l': 2, 'o': 1

*/

//solution -using objects

//https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript

const s = 'hello';
const strFreq = {};

for (let i = 0; i < s.length; i++) {
  strFreq[s[i]] = (strFreq[s[i]] || 0) + 1;
}

console.log(strFreq);

let maxStrKey = 0;
let maxStrValue = 0;
for (let [key, value] of Object.entries(strFreq)) {
  if (strFreq[key] > maxStrValue) {
    maxStrValue = value;
    maxStrKey = key;
  }
}

console.log(maxStrKey, maxStrValue);

//Solution 2 - using array

const sInt = s.split('').map((char) => char.charCodeAt(0) - 'a'.charCodeAt(0));

console.log(sInt);
