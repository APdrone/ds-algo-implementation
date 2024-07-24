/* 234. Palindrome Linked List */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function findMiddle(head) {
  if (head === null) return null;

  let slow = head;
  let fast = head;

  // Move slow by 1 step and fast by 2 steps
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Slow will be at the middle when fast reaches the end
  return slow;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const middleNode = findMiddle(head);
console.log(middleNode.val); // Output: 3
