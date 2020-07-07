import {Graph, Key, Vertex} from '../../../data-structures/graph';
import createQueue from '../../../data-structures/queue';

// return false from callback to stop searching
export type Callback = <T>(key: Key, vertex: Vertex<T>) => boolean;

export default function breadthFirstSearch<T>(
  graph: Graph<T>,
  start: Key,
  callback: Callback,
): void {
  // is empty
  if (graph.isEmpty()) return;
  const startVertex = graph.getVertex(start);
  // has start vertex
  if (!startVertex) return;

  const queue = createQueue<[Key, Vertex<T>]>();
  queue.enqueue([start, startVertex]);
  const visited = {[start]: true};

  while (!queue.isEmpty()) {
    // dequeue vertex
    const [key, vertex] = queue.dequeue() as [Key, Vertex<T>];
    // call callback
    if (!callback(key, vertex)) return;

    // get all neighbors
    const neighbors = graph.getNeighbors(key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length; i++) {
      const k = neighbors[i][0];
      // skip if key already visited
      if (visited[k]) continue;
      // enqueue key
      queue.enqueue(neighbors[i]);
      visited[k] = true;
    }
  }
}
