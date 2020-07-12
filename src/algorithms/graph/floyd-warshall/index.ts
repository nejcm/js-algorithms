import {Graph, Vertex} from '../../../data-structures/graph';

export default function floydWarshall<T>(
  graph: Graph<T>,
): {vertices: Vertex<T>[]; distances: number[][]} | undefined {
  // is empty
  if (graph.isEmpty()) return undefined;

  // graph vertices
  const vertices = graph.getAllVertices();
  const len = vertices.length;
  // distances
  const distances: number[][] = [];

  // fill distance matrix
  for (let i = 0; i < len; i++) {
    distances[i] = [];
    for (let j = 0; j < len; j++) {
      // same source vertex and destination vertex
      if (i === j) {
        distances[i][j] = 0;
        continue;
      }
      // find edge beetween vertices
      // if no edge then Infinity
      const value = vertices[i].edges.get(vertices[j].key)?.weight || Infinity;
      distances[i][j] = value;
    }
  }

  // calculate distance from each vertex to each vertex
  for (let k = 0; k < len; k++) {
    // each vertex as source
    for (let i = 0; i < len; i++) {
      // each vertex as destination
      for (let j = 0; j < len; j++) {
        // these remain unchanged
        if (k === i || k === j || i === j) continue;
        // if vertex k is on the shortest path from i to j,
        // then update the value of distances[i][j]
        if (distances[i][k] + distances[k][j] < distances[i][j]) {
          distances[i][j] = distances[i][k] + distances[k][j];
        }
      }
    }
  }

  return {vertices, distances};
}
