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

/**
 *
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr) {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); //60

/**
 *
 *Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to
 *the function
 */

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers  1,1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

/* 

i=1 ==> prev=NA,current=NA = 1
i=2 ==> prev=NA, current=1 = 1
i=3 ==> prev=1 , current=1 = 2
i=4 ==> prev=1 , current=2 = 3
i=4 ==> prev=2 , current=3 = 5
i=5 ==> prev=3 , current=5 = 8

 */

/* 
// without recursion

function fib(num) {
  let sum = 1,
    current = 0,
    prev = 0;

  for (let i = 1; i < num; i++) {
    prev = current;
    current = sum;
    sum = prev + current;
  }
  return sum;
} */

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
