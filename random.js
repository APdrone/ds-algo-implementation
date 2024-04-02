/**
 * Tree:
 * a data structure that consist of nodes in a parent/child relationship.
 * - there needs to be single root
 * - parent always point to a child , child dont point back to parent
 *
 * lists vs tree:
 * lists are linear whereas trees are non-linear
 *
 * we can also say singly linked list is special case of tree
 *
 * terminaology:
 *
 * root: top node in a tree
 * child: a node directly connected to another node when moving away from root
 * parent: the converse node of a child
 * siblings:a group of nodes with the same parent
 * leaf: node with no children
 * edge: the connection between one node and another
 *
 * use cases for tree:
 * - HTML DOM
 * - network routing
 * - abstract syntax tree
 * - AI
 * - Folders in OS
 * - JSON
 * - Computer file styem
 *
 * Kinds of Tree:
 * - Trees
 * - Binary tree- can have max two children,
 * - Binary Search Tree- special case of binary trees, BST works like:
 *     1) every parent node has at most two children
 *     2) every node to the left of a parent node is always less than the parent
 *     3) every node to the right of a parent node is always greater than the parent
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
  find(val) {}
}

const tree = new BST();

console.log(tree);
