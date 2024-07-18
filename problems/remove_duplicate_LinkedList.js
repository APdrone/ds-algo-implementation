/* 

83. Remove Duplicates from Sorted List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  deleteDuplicates() {
    if (this.length == 0 || this.length == 1) {
      return this;
    }
    let node = this.head;
    let nextNode = node.next;

    while (nextNode) {
      if (node.val == nextNode.val) {
        nextNode = nextNode.next;
        node.next = nextNode;
        this.length--;
      } else {
        node = nextNode;
        nextNode = node.next;
      }
    }
    return this;
  }
}

const list = new LinkedList();

list.push(1);
list.push(1);
list.push(1);
list.push(2);

console.log(list.deleteDuplicates());

console.log(list);
