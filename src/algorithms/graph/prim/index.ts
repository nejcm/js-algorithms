import createGraph, {
  Edge,
  Graph,
  Key,
  Vertex,
} from '../../../data-structures/graph';
import createPriorityQueue, {
  Item,
} from '../../../data-structures/priority-queue';

export default function prim<T>(graph: Graph<T>): Graph<T> | undefined {
  // is directed
  if (graph.directed) {
    throw new Error("Prim's algorithms works only for undirected graphs.");
  }
  // is empty
  if (graph.isEmpty()) return undefined;

  // minimum spanning tree
  const mst = createGraph<T>();
  // visited vertices
  const visited = new Map<Key, boolean>();
  // edge queue ordered by weight
  const edgesQueue = createPriorityQueue<Edge>();
  // start vertex
  const startVertex: Vertex<T> = graph.vertices.values().next().value;
  visited.set(startVertex.key, true);

  // add all edges of start vertex to the queue
  startVertex.edges.forEach((edge) => {
    edgesQueue.enqueue(edge, edge.weight);
  });

  // explore all queued edges
  while (!edgesQueue.isEmpty()) {
    // get edge with min weight
    const currentEdge = (edgesQueue.dequeue() as Item<Edge>).value as Edge;

    // find next min vertex to visit
    let nextKey: Key | null = null;
    if (!visited.get(currentEdge.end)) {
      nextKey = currentEdge.end;
    }

    // if next vertex was already visited then continue
    if (nextKey === null) continue;

    // add current edge to minimum spanning tree
    mst.addEdge(currentEdge.start, currentEdge.end, currentEdge.weight);

    // add vertex to visited
    visited.set(nextKey, true);

    // add vertex edges to the queue
    (graph.getEdges(nextKey) as Edge[]).forEach((edge) => {
      // add edge that connects unvisited vertex
      if (!visited.get(edge.start) || !visited.get(edge.end)) {
        edgesQueue.enqueue(edge, edge.weight);
      }
    });
  }

  return mst;
}
