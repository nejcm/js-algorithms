import {Graph, Key, Vertex} from '../../../data-structures/graph';

// return false from callback to stop searching
export type Callback = <T>(key: Key, vertex: Vertex<T>) => boolean;

export default function depthFirstSearch<T>(
  graph: Graph<T>,
  start: Key,
  callback: Callback,
): void {
  // is empty
  if (graph.isEmpty()) return;
  const startVertex = graph.getVertex(start);
  // has start vertex
  if (!startVertex) return;

  const visited = {[start]: true};
  const dfs = (key: Key, vertex: Vertex<T>): boolean => {
    // mark key as visited
    visited[key] = true;
    // call callback
    if (!callback(key, vertex)) return false;

    // get all neighbors
    const neighbors = graph.getNeighbors(key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length; i++) {
      const [k, v] = neighbors[i];
      // skip if key already visited
      if (visited[k]) continue;
      // call dfs recursively
      // stop if false returned from function
      if (!dfs(k, v)) return false;
    }
    return true;
  };

  dfs(start, startVertex);
}
