import {Edge, Graph, Key} from '../../../data-structures/graph';
import createPriorityQueue, {
  Item,
} from '../../../data-structures/priority-queue';

export default function dijkstra<T>(
  graph: Graph<T>,
  start: Key,
): [Key, number][] | undefined {
  // is empty
  if (graph.isEmpty()) return undefined;
  // get start vertex
  const startVertex = graph.getVertex(start);
  // has start vertex
  if (!startVertex) return undefined;

  // init queue
  const queue = createPriorityQueue<Key>();
  // visited vertices
  const visited = new Map<Key, boolean>();
  // distances
  const distances = new Map<Key, number>();
  // add distance for start vertex
  distances.set(startVertex.key, 0);

  // init vertices queue
  queue.enqueue(startVertex.key, 0);

  while (!queue.isEmpty()) {
    // get vertex from queue
    const currentKey = (queue.dequeue() as Item<Key>).value as Key;

    // iterate neighbors of current vertex
    (graph.getEdges(currentKey) as Edge[]).forEach((edge) => {
      // skip if already visited
      if (!visited.get(edge.end)) {
        // update distances to every connected vertex
        const distanceToNext = distances.get(edge.end) || Infinity;
        const completeDistance =
          (distances.get(currentKey) || 0) + (edge.weight as number);

        // if the distance is shorter than update it
        if (completeDistance < distanceToNext) {
          distances.set(edge.end, completeDistance);

          // update priority queue
          if (queue.contains(edge.end)) {
            queue.changePriority(edge.end, completeDistance);
          }
        }

        // add neighbors to queue
        if (!queue.contains(edge.end)) {
          queue.enqueue(edge.end, distances.get(edge.end));
        }
      }
    });

    // add current vertex to visited
    visited.set(currentKey, true);
  }

  return [...distances.entries()];
}
