/* 
1281. Subtract the Product and Sum of Digits of an Integer

*/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0,
    product = 1;
  let newN = n.toString();
  for (let i = 0; i < newN.length; i++) {
    let convertN = parseInt(newN[i]);
    sum = sum + convertN;
    product = product * convertN;
  }

  return product - sum;
};
