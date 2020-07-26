import {Graph, Key, Vertex} from '../../../data-structures/graph';

export default function stronglyConnectedComponents<T>(
  graph: Graph<T>,
): Key[][] | undefined {
  // is empty
  if (graph.isEmpty()) return undefined;

  // result
  const scc: Key[][] = [];
  // visited vertices
  const visited = new Map<Key, boolean>();
  // visited order stack
  const stack: Vertex<T>[] = [];

  // get strongly connected components
  const getStronglyConnected = (vertex: Vertex<T>, result: Key[]): Key[] => {
    visited.set(vertex.key, true);

    // save current
    result.push(vertex.key);

    // loop neighbor vertices
    const neighbors = graph.getNeighbors(vertex.key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length || 0; i++) {
      // visit all neightbor vertices
      if (!visited.get(neighbors[i][1].key))
        result = getStronglyConnected(neighbors[i][1], result);
    }
    return result;
  };

  // get vertices in order
  const getOrder = (vertex: Vertex<T>): void => {
    // mark visited
    visited.set(vertex.key, true);

    // loop neighbor vertices
    const neighbors = graph.getNeighbors(vertex.key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length || 0; i++) {
      // visit all neightbor vertices
      if (!visited.get(neighbors[i][1].key)) getOrder(neighbors[i][1]);
    }
    // add vertex to stack
    stack.push(vertex);
  };

  // loop all vertices
  const vertices = graph.getAllVertices();
  for (let i = 0; i < vertices.length; i++) {
    // fill vertices in stack according to their finishing times
    if (!visited.get(vertices[i].key)) getOrder(vertices[i]);
  }

  // reverse graph
  graph.reverse();

  // clear visited
  visited.clear();

  // loop vertices by stack order
  while (stack.length) {
    // get first vertex from stack
    const vertex = stack.pop() as Vertex<T>;
    // get strongly connected component
    if (!visited.get(vertex.key)) {
      scc.push(getStronglyConnected(vertex, []));
    }
  }

  return scc;
}
