class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const oldTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = oldTail.prev;
      this.tail = prevNode;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
  }
}

const list = new DoublyLinkedList();

console.log(list);
