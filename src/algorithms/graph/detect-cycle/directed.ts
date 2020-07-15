import {Graph, Key, Vertex} from '../../../data-structures/graph';

export default function detectCycle<T>(graph: Graph<T>): boolean {
  // is directed
  if (!graph.directed) {
    throw new Error('Detect cycle algorithms works only for directed graphs.');
  }
  // is empty
  if (graph.isEmpty()) return false;

  // visited vertices
  const visited = new Map<Key, boolean>();

  // dfs
  const isCyclic = (vertex: Vertex<T>, stack: Map<Key, boolean>): boolean => {
    // mark visited and
    // part of current recursion set
    if (stack.get(vertex.key)) return true;
    if (visited.get(vertex.key)) return false;

    visited.set(vertex.key, true);
    stack.set(vertex.key, true);

    // loop neighbor vertices
    const neighbors = graph.getNeighbors(vertex.key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length || 0; i++) {
      if (isCyclic(neighbors[i][1], stack)) return true;
    }

    // remove from current stack
    stack.set(vertex.key, false);
    return false;
  };

  // loop all vertices
  // in case if not connected edges
  const vertices = graph.getAllVertices();
  for (let i = 0; i < vertices.length; i++) {
    if (isCyclic(vertices[i], new Map<Key, boolean>())) return true;
  }

  return false;
}
