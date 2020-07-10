import {Graph, Key} from '../../../data-structures/graph';

export default function bellmanFord<T>(
  graph: Graph<T>,
  start: Key,
): [Key, number][] | undefined {
  // is empty
  if (graph.isEmpty()) return undefined;
  // get start vertex
  const startVertex = graph.getVertex(start);
  // has start vertex
  if (!startVertex) return;

  // distances
  const distances = new Map<Key, number>();
  const vertices = graph.getAllVertices();
  vertices.forEach((vertex) => {
    distances.set(vertex.key, Infinity);
  });
  distances.set(start, 0);
  const len = vertices.length;
  // relax all edges len - 1 times
  // + 1 loop for negative weight cycle check
  for (let i = 0; i < len; i++) {
    let changes = 0;

    // loop all vertices
    vertices.forEach((vertex) => {
      // loop all vertex edges
      const distanceToVertex = distances.get(vertex.key) as number;
      vertex.edges.forEach((edge, key) => {
        // calculate the iteration distance between vertices
        const distanceToNeighbor = distanceToVertex + (edge.weight || 0);
        const edgeDistance = distances.get(key) as number;
        // is distance smaller than the current
        if (distanceToNeighbor < edgeDistance) {
          // check for negative-weight cycles
          // in the last loop
          if (i === len - 1) {
            throw new Error('Graph contains negative weight cycle');
          }
          distances.set(key, distanceToNeighbor);
          changes++;
        }
      });
    });

    // if distances do not change anymore
    // then ston iterating
    if (changes === 0) {
      break;
    }
  }

  return [...distances.entries()];
}
