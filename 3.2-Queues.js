/**
 * Queues:
 * a FIFO data structure
 * eg bank queue,
 *
 * usecases:
 * - background tasks like download
 * - uploading resources
 * - printing/task processing
 * - useful for processing tasks  and are foundational for more complex data structures
 *
 * Again we can implmenet it different ways. using both array and linked list
 *
 *
 */

/* 1st way using arrays */

const q = [];

//for addition

q.push('FIRST');
q.push('SECOND');
q.push('THIRD');

// for removal, we need which was input first

q.shift();
q.shift();
q.shift();

/* 
but again, shift will make the operation o(n). other way we can do is to unshift and pop to add and remove the element
*/

//for addition

q.unshift('FIRST');
q.unshift('SECOND');
q.unshift('THIRD');

// for removal, we need which was input first

q.pop();
q.pop();
q.pop();

/* here also unshift will make the operation o(n) 

in stack we can acheieve o(1) using push and pop but here in queue in both cases, one of the operation is leading to o(1)
*/

/* 2nd way using linkedlist 

we have two ways to achieve this using addition on head and removing from tail or vice versa

but if we think about it , if we conside the first approach , then addition is easy but again for removal we need to iterate till tail 
so makes the operation o(n)

instead we can use second apprach, where we can add at the tail and remove from the head , which will keep the operation constant time - o(1)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldlast = this.last;
      this.last = newNode;
      oldlast.next = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size <= 0) {
      return;
    }
    const oldFirst = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    return oldFirst.val;
  }
}

const queue = new Queue();

queue.enqueue('hello');
queue.enqueue('there');
queue.enqueue('you');

console.log(queue);

/**
 * Big O of queues
 *
 * Insertion - o(1)
 * removal - o(1)
 * searching - o(n)
 * access - o(n)
 *
 *
 */
