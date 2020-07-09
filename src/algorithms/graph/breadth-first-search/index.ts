import {Graph, Key, Vertex} from '../../../data-structures/graph';
import createQueue from '../../../data-structures/queue';

// return false from callback to stop searching
export type Callback<T> = (key: Key, vertex: Vertex<T>) => boolean | void;

export interface Options<T> {
  visitCallback: Callback<T>;
  visited?: Map<Key, boolean>;
}

export default function breadthFirstSearch<T>(
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

  const queue = createQueue<[Key, Vertex<T>]>();
  queue.enqueue([start, startVertex]);
  visited.set(start, true);

  while (!queue.isEmpty()) {
    // dequeue vertex
    const [key, vertex] = queue.dequeue() as [Key, Vertex<T>];
    // call callback
    if (visitCallback(key, vertex) === false) return;

    // get all neighbors
    const neighbors = graph.getNeighbors(key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length; i++) {
      // skip if key already visited
      if (visited.get(neighbors[i][0])) continue;
      // enqueue key
      queue.enqueue(neighbors[i]);
      visited.set(neighbors[i][0], true);
    }
  }
}
