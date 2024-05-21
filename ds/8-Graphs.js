/**
 * Graphs:
 * graph data structure consist of finite set of vertices or nodes or points, together with set of unordered pairs of these vertices for a unidirected graph or a set of ordered pairs for directed graphs
 *
 * Uses for graph:
 * - Social networks
 * - Location/Mapping
 * - Routing Algorithms
 * - Visual Hierachy
 * - File system optimizations
 * etc
 *
 * - recommendations  ie netflix, spotify
 *
 * Types of graph:
 *
 * essentials graph terms:
 * vertex: a node
 * Edge: connection between nodes
 * weighted/unweighted: values assigned to distances between vertices
 * directed/undirected: directions assigned to distanced between vertices
 *
 *
 * Storing graphs:
 * 1) adjacency list
 * 2) adjaceny matrix
 *
 *
 *
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    console.log('before', this.adjacencyList[v1]);
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((item) => item !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((item) => item !== v1);
    console.log('after', this.adjacencyList[v1]);
  }
  remove(vertex) {
    // const newArr = this.adjacencyList[vertex];
    // // console.log(newArr);
    // for (let key of newArr) {
    //   this.adjacencyList[key] = this.adjacencyList[key].filter((item) => item != vertex);
    // }
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    // console.log(this.adjacencyList);
  }
}

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Seoul');
graph.addVertex('France');
graph.addVertex('Tehran');
graph.addEdge('Tokyo', 'Seoul');
graph.addEdge('Seoul', 'France');
graph.addEdge('France', 'Tehran');

console.log('graph', graph);
// graph.removeEdge('Tokyo', 'Seoul');
graph.remove('Seoul');

console.log('graph', graph);
