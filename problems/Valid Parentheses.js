/* Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openingBrackets = '({[';
  //   const closingBrackets = ')}]';
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
      //   console.log('stack-push', stack);
    } else {
      if (stack.length == 0) return false;
      const poppedElement = stack.pop();
      //   console.log('stack-pop', stack);
      if (
        (poppedElement == '(' && s[i] !== ')') ||
        (poppedElement == '{' && s[i] !== '}') ||
        (poppedElement == '[' && s[i] !== ']')
      ) {
        return false;
      }
    }
  }
  //   console.log(stack);
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid('(]'));
