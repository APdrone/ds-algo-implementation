class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
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
  pop() {
    let prevNode = '';
    let current = '';
    if (!this.head) {
      return;
    }
    current = this.head;
    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) {
      return;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    let current = this.head;
    while (index > 0) {
      current = current.next;
      index--;
    }
    return current;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insertInto(index, val) {
    const newNode = new Node(val);

    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(val);
      return true;
    } else if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      const prevNode = this.get(index - 1);
      const prevNext = prevNode.next;
      prevNode.next = newNode;
      newNode.next = prevNext;
      this.length++;
      return this;
    }
  }
  removeInto(index, val) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      this.pop();
      return true;
    } else if (index === 0) {
      this.shift();
      return true;
    } else {
      const prevNode = this.get(index - 1);
      const removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return this;
    }
  }
  reverse() {
    if (this.length < 0) {
      return;
    }
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('to');
// list.pop();
// list.shift();

console.log(list);

/**
 * Big O for linked list
 *  Insertion - o(1)
 * removal- o(1) or O(n)
 * searching - 0(n)
 * access- o(n)
 *
 * excels in insertion and deletion than array, but array works better for searching and accessing/random access
 *
 * better when insertion and deletion at the begining is required
 *
 * Array uses linked list
 *
 *
 */
