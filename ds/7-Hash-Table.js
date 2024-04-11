/**
 * Hash Tables:
 * aka Hash map
 *
 * it is used to store key-value pairs
 *
 * baecause of their speed, hash tables are commonly used
 *
 * implementation in different languages:
 *
 * Python ==> dictionary
 * JS ==> objects(have some restriction(like key can be string only) but are basically hash tables) and Maps
 * Java/go/Scale ==> Maps
 * Ruby  => hashes
 *
 *
 * to implement hash table, we will using an array.
 *
 * In order to look up values by key, we need a way to convert keys into valid array indices
 *
 * a function that performs this tasks is called a hash function
 *
 * Hash function Intro=>
 *
 * what makes good hash  functions:
 *  - fast (constant time)
 *  - doesnt cluster outputs at specific indices but distributes uniformly
 *  - Deterministic(same inputs yields same ouput means the key hash provides for us to store values should be same everytime)
 *
 * Dealing with collisions:
 *
 * - separate chaining
 * - linear probing
 */

// Hash functions

class hashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    // console.log(index);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (!index) return 'no such key';
    const getArr = this.keyMap[index];
    console.log('getArr', getArr);
    console.log('length', getArr[0][0]);
    for (let i = 0; i < getArr.length; i++) {
      if (getArr[i][0] === key) {
        return getArr[i][1];
      }
    }
  }
  keys() {
    const keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const nestedArrLength = this.keyMap[i]?.length || 0;
      if (!nestedArrLength) continue;
      const getArr = this.keyMap[i];
      for (let j = 0; j < getArr.length; j++) {
        keyArr.push(getArr[j][0]);
      }
    }
    return keyArr;
  }
  values() {
    const keyVal = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const nestedArrLength = this.keyMap[i]?.length || 0;
      if (!nestedArrLength) continue;
      const getArr = this.keyMap[i];
      for (let j = 0; j < getArr.length; j++) {
        keyVal.push(getArr[j][1]);
      }
    }
    return keyArr;
  }
}

const ht = new hashTable();
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

// const found = ht.get('maroon');

console.log(ht.keys());
console.log(ht.values());
// console.log(ht);
// console.log(found);

/**
 * Hash table Big O
 *
 * Insertion: o(1)
 * Deletion: o(1)
 * Access: o(1)
 *
 * Also depends on the hash function used, (how evenly it distribute)
 */
