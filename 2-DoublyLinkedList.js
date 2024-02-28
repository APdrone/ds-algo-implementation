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
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    oldHead.prev = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    console.log(Math.floor(this.length / 2));
    console.log(Math.round(this.length / 2) - index <= 0);
    let nextNode;
    if (index <= this.length / 2) {
      console.log('head render');
      nextNode = this.head;

      for (let i = 0; i < index; i++) {
        nextNode = nextNode.next;
      }
    } else {
      console.log('tail render');
      nextNode = this.tail;

      for (let i = 0; i < this.length - index - 1; i++) {
        nextNode = nextNode.prev;
      }
    }
    return nextNode;
  }
}

const list = new DoublyLinkedList();

list.push('yes');
list.push('hello');
list.push('are');
list.push('you');
list.push('there!');

console.log(list);
