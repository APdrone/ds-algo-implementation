/**
 *  How recursive function works ?
 * invoke same function with a different input until you reach the base case
 *
 * base case:
 * condition when recursion ends
 *
 * essentials part of recursive:
 * - base case
 * - different input
 *
 *
 */

/* first way */

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(5);

function sumRange(num) {
  if (num == 1) return 1;
  return num + sumRange(num - 1);
}

// using factorial:

function fact(num) {
  const result = 1;
  for (let i = num; i > 0; i--) {
    result = result * num;
  }
  return result;
}

fact(2);

/* second way -- using helper function */

function fact(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  console.log(result);
  return result;
}

fact(6);

function factRc(num) {
  if (num == 1) return 1;
  return num * factRc(num - 1);
}

console.log(factRc(6));
