import createDisjointSet from '../../../data-structures/disjoint-set';
import {Graph} from '../../../data-structures/graph';

export default function detectCycle<T>(graph: Graph<T>): boolean {
  // is directed
  if (graph.directed) {
    throw new Error('Detect cycle algorithms works only for undirected graphs.');
  }
  // is empty
  if (graph.isEmpty()) return false;

  const disjointSet = createDisjointSet();
  // add vertices to disjoint set
  graph.getAllVertices().forEach((vertex) => disjointSet.add(vertex.key));

  const edges = graph.getAllEdges();
  // loop edges and check if vertices already in same set
  // otherwise union them
  for (let i = 0; i < edges.length; i++) {
    // cycle found
    if (disjointSet.isSameSet(edges[i].start, edges[i].end)) return true;
    // union and continue
    else disjointSet.union(edges[i].start, edges[i].end);
  }

  return false;
}
