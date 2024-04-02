/**
 * What is a stack?
 *
 * A LIFO data structure
 *
 * the last element added to the stack will be the first element removed from the stack
 *
 * eg call stack, collection of books, plates
 *
 * there are multiple ways to implement it , will use linked list. stack is more of a concept and we just need to implement LIFO
 *
 * usecases:
 * - managing function invocations
 * - undo/redo
 * - routing (the history object) is treated like a stack!
 */

//using arrays

const stacks = [];

/* 1st way we can use push and pop */

//to add
stacks.push('google');
stacks.push('instagram');
stacks.push('youtube');

//now to remove the last input (LIFO)
stacks.pop();
stacks.pop();
stacks.pop();

/* 2nd way we can use shift and unshift */

//to add
stacks.unshift('google');
stacks.unshift('instagram');
stacks.unshift('youtube');

//now to remove the last input (LIFO)
stacks.shift();
stacks.shift();
stacks.shift();

/** but we think of efficiency out of two approaches , big 0 is o(n) for shift and unshift operations  so 1st would be better.
 *
 * but we need better efficiencey, it is better not to use arrays for stack .
 *
 */

//using linkedlist

/**
 * we need a class defined as stack , going to use methods from unshift and shift as oppose to push and pop as in pop , have to
 * iterate and find the prev element in pop. and stack push and pop are big O for o(1)
 *
 *
 * */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldHead = this.head;
      this.first = newNode;
      this.first.next = oldHead;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size >= 0) {
      return;
    }
    const oldHead = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldHead.next;
    oldHead.next = null;
    this.size--;
    return oldHead.val;
  }
}

const stack = new Stack();
stack.push('hello');
stack.push('there!');
console.log(stack);

/**
 * Big O of stacks
 *  insertion - 0(1)
 *  removal - 0(1)
 *  searching - 0(n)
 *  access - 0(n)
 *
 * Stacks are used primaily for insertion and removal
 *
 *
 */
