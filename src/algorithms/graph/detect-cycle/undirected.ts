import {Graph, Key, Vertex} from '../../../data-structures/graph';

export default function detectCycle<T>(graph: Graph<T>): boolean {
  // is directed
  if (graph.directed) {
    throw new Error(
      'Detect cycle algorithms works only for undirected graphs.',
    );
  }
  // is empty
  if (graph.isEmpty()) return false;

  // visited vertices
  const visited = new Map<Key, boolean>();

  // dfs
  const isCyclic = (vertex: Vertex<T>, parent?: Vertex<T>): boolean => {
    // mark visited
    visited.set(vertex.key, true);

    // loop neighbor vertices
    const neighbors = graph.getNeighbors(vertex.key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length || 0; i++) {
      // if not visited then continue
      if (!visited.get(neighbors[i][1].key)) {
        if (isCyclic(neighbors[i][1], vertex)) return true;
      }
      // if visited and to a parent of current vertex,
      // then cycle found
      else if (neighbors[i][1].key !== parent?.key) return true;
    }
    return false;
  };

  // loop all vertices
  // if not already visited
  const vertices = graph.getAllVertices();
  for (let i = 0; i < vertices.length; i++) {
    if (!visited.get(vertices[i].key) && isCyclic(vertices[i])) {
      return true;
    }
  }

  return false;
}
