/**
 * Binary Heaps:
 * Another category of tree
 *
 * similar to binary search tree but with some different rules
 *
 * In MaxBinary heap, parent nodes are always larger then child nodes
 * and in minBinary heap, parent nodes are always less than child nodes
 *
 * and there is no order (like BST, left is smaller and right is bigger), only rule is parent is bigger/smaller than child nodes
 *
 * Max Binary tree:
 * - each parent has at most two child nodes
 * - value of each parent node is always greater than its child nodes
 * - but there is no gurantees between sibling nodes
 * - left children are filled out first
 *
 *              100
 *          19       36
 *       17    3    25   1
 *     2   7
 *
 * similary min binary tree:
 *               1
 *            2          3
 *        17     19   36    7
 *     25  100
 *
 * UsesCases-
 * - Binary heaps are used to implement priority Queues
 * - also used quite a bit with graph traversal algo
 *
 */

/* 
Storing Heaps: 
we are going to use array for this and for array of index n:
for left child: 2n+1
right child: 2n+2

where these are stored

say we need to find parent of given child , now we can 

parent=> (n-1)/2  amd floor the result

*/

/* 
maxBinary Heap operations

similar logic we can do for minBinary Heap

for addition/insertion, we add to the end and then bubble up it as parents need to greater then child node

for getting max element, then removing root element , we can remove the top element and replace it with last element and then sink it down , so that parent should always be the greater
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleup();
  }
  bubbleup() {
    let index = this.values.length - 1;
    // const newValue= this.values[index];
    let parentIndex = 0;
    while (parentIndex >= 0 && index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        let temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[index];
        this.values[index] = temp;

        index = parentIndex;
      } else {
        break;
      }
    }
  }
  extractMax() {
    const maxValue = this.values.shift();
    console.log(maxValue);
    this.values.unshift(this.values.pop());
    console.log('this-after', this.values);
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
        if (leftChild > element) {
          swap = left;
        }
      }
      if (right < length) {
        rightChild = this.values[right];
        if ((swap === null && right > element) || (swap !== null && rightChild > leftChild)) {
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

const heap = new MaxBinaryHeap();
// heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// heap.insert(45);
// heap.insert(12);
// heap.insert(100);
console.log(heap); //values: [55, 45, 41, 39, 27, 12, 33, 18];
console.log(heap.extractMax()); //values: [55, 45, 41, 39, 27, 12, 33, 18];
console.log(heap);
