import {Graph, Key, Vertex} from '../../../data-structures/graph';

// return false from callback to stop searching
export type Callback<T> = (key: Key, vertex: Vertex<T>) => boolean | void;

export interface Options<T> {
  visitCallback: Callback<T>;
  visited?: Map<Key, boolean>;
}

export default function depthFirstSearch<T>(
  graph: Graph<T>,
  start: Key,
  options: Options<T>,
): void {
  // is empty
  if (graph.isEmpty()) return;
  // get options
  const {visitCallback, visited = new Map()} = options;
  // get start vertex
  const startVertex = graph.getVertex(start);
  // has start vertex and was not visited
  if (!startVertex || visited.get(start)) return;

  const dfs = (key: Key, vertex: Vertex<T>): boolean => {
    // mark key as visited
    visited.set(key, true);
    // call callback
    if (visitCallback(key, vertex) === false) return false;

    // get all neighbors
    const neighbors = graph.getNeighbors(key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length; i++) {
      const [k, v] = neighbors[i];
      // skip if key already visited
      if (visited.get(k)) continue;
      // call dfs recursively
      // stop if false returned from function
      if (!dfs(k, v)) return false;
    }
    return true;
  };
  dfs(start, startVertex);
}
