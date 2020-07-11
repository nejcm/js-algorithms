import createDisjointSet from '../../../data-structures/disjoint-set';
import createGraph, {Edge, Graph} from '../../../data-structures/graph';

export default function kruskal<T>(graph: Graph<T>): Graph<T> | undefined {
  // is directed
  if (graph.directed) {
    throw new Error("Prim's algorithms works only for undirected graphs.");
  }
  // is empty
  if (graph.isEmpty()) return undefined;

  // minimum spanning tree
  const mst = createGraph<T>();

  // sort edges by weight
  // using built in sort function but can also use
  // other implemented sorting algorithms or priority queue (min heap)
  const sortedEdges = graph
    .getAllEdges()
    .sort((e1, e2) => (e1.weight as number) - (e2.weight as number));

  // disjoint set for graph vertices
  const disjointSet = createDisjointSet();

  // loop sorted edges
  // add them to minimum spanning tree if they do not form a cycle
  for (let i = 0; i < sortedEdges.length; i++) {
    const currentEdge = sortedEdges[i] as Edge;

    // skip edge if it forms a cycle
    if (!disjointSet.isSameSet(currentEdge.start, currentEdge.end)) {
      // add vertices to disjoint set
      disjointSet.add(currentEdge.start, currentEdge.end);
      // union two subsets
      disjointSet.union(currentEdge.start, currentEdge.end);
      // add current edge to minimum spanning tree
      mst.addEdge(currentEdge.start, currentEdge.end, currentEdge.weight);
    }
  }

  return mst;
}
