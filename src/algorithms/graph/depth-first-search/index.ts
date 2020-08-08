import {Graph, Key, Vertex} from '../../../data-structures/graph';

// return data that will be passed to next function call
export type Callback<T> = (key: Key, vertex: Vertex<T>, data?: unknown) => unknown | void;

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

  const dfs = (key: Key, vertex: Vertex<T>, data?: unknown): void => {
    // call callback
    data = visitCallback(key, vertex, data);
    // mark key as visited
    visited.set(key, true);

    // get all neighbors
    const neighbors = graph.getNeighbors(key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length; i++) {
      const [k, v] = neighbors[i];
      // skip if key already visited
      if (visited.get(k)) continue;
      // call dfs recursively
      dfs(k, v, data);
    }
  };
  dfs(start, startVertex);
}
