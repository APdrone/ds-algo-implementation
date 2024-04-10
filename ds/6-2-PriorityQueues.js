/**
 * Priority Queue:
 * data structure where each element has a priority.Element with higher priorities are served before element with lower priorities
 *
 * we can implement it with array or linkedlist. it is just a concept
 *
 * Usecases:
 * -
 *
 */

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleup();
  }
  bubbleup() {
    let index = this.values.length - 1;
    // const newValue= this.values[index];
    let parentIndex = 0;
    while (parentIndex >= 0 && index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority > this.values[parentIndex].priority) {
        let temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[index];
        this.values[index] = temp;

        index = parentIndex;
      } else {
        break;
      }
    }
  }
  dequeue() {
    const maxValue = this.values.shift();
    this.values.unshift(this.values.pop());
    if (this.values.length) {
      this.sinkDown();
    }
    return maxValue;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      let leftChild, rightChild;
      let swap = null;

      if (left < length) {
        leftChild = this.values[left];
        if (leftChild.priority > element.priority) {
          swap = left;
        }
      }
      if (right < length) {
        rightChild = this.values[right];
        if (
          (swap === null && right.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = right;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const heap = new PriorityQueue();
// heap.insert(41);
heap.enqueue('common cold', 1);
heap.enqueue('gym fees', 5);
heap.enqueue('fever', 2);

console.log(heap);

/* 
values: [
    Node { val: 'gym fees', priority: 5 },
    Node { val: 'common cold', priority: 1 },
    Node { val: 'fever', priority: 2 }
  ]
*/

heap.dequeue();

console.log(heap);

/* 
 [
    Node { val: 'fever', priority: 2 },
    Node { val: 'common cold', priority: 1 }
  ]
*/

/* 
Big O for binary heaps, we use of insertion/deletion

Insertion:  o(logn)
deleteion:  o(logn)
Search - o(n)





*/
