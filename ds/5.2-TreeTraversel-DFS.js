/**
 * Tree traversal:
 * there are multiple ways to traverse tree but there are four common is :
 * - Breadth first Search
 * - depth first search
 *
 *        10
 *    6      15
 * 3    8       20
 *
 * BFS=>[10,6,15,3,8,20]
 *
 * DFS(in-order)=>[3,6,8,10,15,20]
 * DFS(pre-order)=>[10,6,3,8,15,20]
 * DFS(post-order)=>[3,8,6,20,15,10]
 */
/* 
DFS(pre-order): we hit till the bottom before moving to next, we traverse the left part first and then come back to root and traverse the right path. in this we are pushing the values first before traversing(using recursion)

DFS(post-order):in this we are pushing the values last before traversing(using recursion)   


DFS(in-order): in this we are pushing the left values first then the right ones

 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let compareNode = this.root;
    while (true) {
      if (val === compareNode.value) return undefined;
      const move = compareNode.value > val;
      if (!move) {
        if (!compareNode.right) {
          compareNode.right = newNode;
          return this;
        }
        compareNode = compareNode.right;
      } else {
        if (!compareNode.left) {
          compareNode.left = newNode;
          return this;
        }
        compareNode = compareNode.left;
      }
    }
  }

  DFSPreOrder() {
    if (!this.root) return;
    const data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    if (!this.root) return;
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  DFSInOrder() {
    if (!this.root) return;
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);
/*
 *        10
 *    6      15
 * 3    8       20
 */

console.log(tree.DFSPreOrder()); // [10, 6, 3, 8, 15, 20]
console.log(tree.DFSPostOrder()); //  [3, 8, 6, 20, 15, 10]
console.log(tree.DFSInOrder()); //   [3, 6, 8, 10, 15, 20]
