import {Graph, Key, Vertex} from '../../../data-structures/graph';

export type VertexMeta = {
  discoveryTime: number;
  lowDiscoveryTime: number;
};

export default function bridges<T>(graph: Graph<T>): [Key, Key][] | undefined {
  // is empty
  if (graph.isEmpty()) return undefined;

  // bridges
  const br = new Map<Key, Key>();
  // visited vertices
  const visited = new Map<Key, VertexMeta>();
  // parent vertices
  const parent = new Map<Key, Key>();
  // discovery time
  let discoveryTime = 0;
  // start vertex
  const startVertex: Vertex<T> = graph.vertices.values().next().value;

  const dfs = (vertex: Vertex<T>): void => {
    discoveryTime++;

    // add discovery time to visited
    visited.set(vertex.key, {
      discoveryTime,
      lowDiscoveryTime: discoveryTime,
    });

    const neighbors = graph.getNeighbors(vertex.key) as [Key, Vertex<T>][];
    for (let i = 0; i < neighbors.length; i++) {
      const [nKey, nVertex] = neighbors[i];
      // skip if key already visited
      if (!visited.get(nKey)) {
        parent.set(nKey, vertex.key);
        // call dfs recursively
        dfs(nVertex);

        // check if subtree of nVertex is
        // connection to one of the ancestors of vertex
        const vMeta = visited.get(vertex.key) as VertexMeta;
        const nMeta = visited.get(nKey) as VertexMeta;
        // update current vertex low discovery time
        vMeta.lowDiscoveryTime = Math.min(
          vMeta.lowDiscoveryTime,
          nMeta.lowDiscoveryTime,
        );
        visited.set(vertex.key, vMeta);

        // vertex is not root and low discovery time of one of its connected vertices
        // is more than discovery value of vertex
        if (nMeta.lowDiscoveryTime > vMeta.discoveryTime) {
          br.set(vertex.key, nKey);
        }
      }
      // update low discovery time value of vertex for parent function calls
      else if (nVertex.key !== parent.get(vertex.key)) {
        const vMeta = visited.get(vertex.key) as VertexMeta;
        const nMeta = visited.get(nKey) as VertexMeta;
        // update current vertex low discovery time
        vMeta.lowDiscoveryTime = Math.min(
          vMeta.lowDiscoveryTime,
          nMeta.discoveryTime,
        );
        visited.set(vertex.key, vMeta);
      }
    }
  };

  dfs(startVertex);
  return [...br.entries()];
}
