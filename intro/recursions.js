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

/* Power function */

function power(num, count) {
  if (count === 0) {
    return 1;
  }
  return num * power(num, count - 1);
}
// 2 * 2*1=4

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

/* factorial function */

function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1)); //1
// console.log(factorial(2)); //2
// console.log(factorial(4)); //24
// console.log(factorial(7)); //5040

/* productOfArray function */

function productOfArray(arr) {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); //60
