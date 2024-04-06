/* * Tree traversal:
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

//BFS - we visit each node at every level before looking at the child, horizontal across before we go vertical, using queue to get the result

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

  BFS() {
    if (!this.root) return;
    const data = [],
      queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
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

console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]
