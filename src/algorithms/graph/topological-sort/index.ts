import {Graph, Key, Vertex} from '../../../data-structures/graph';
import depthFirstSearch, {Callback} from '../depth-first-search';

export default function topologicalSort<T>(
  graph: Graph<T>,
): Vertex<T>[] | undefined {
  // is undirected
  if (!graph.directed) {
    throw new Error(
      'Topological sort algorithms works only for directed graphs.',
    );
  }
  // is empty
  if (graph.isEmpty()) return undefined;

  const unvisited = new Map<Key, boolean>();
  graph.getAllVertices().forEach((vertex) => {
    unvisited.set(vertex.key, true);
  });

  const result: Vertex<T>[] = [];
  const visited = new Map<Key, boolean>();
  const visitCallback: Callback<T> = (_, vertex) => {
    // add to result
    result.push(vertex);
    // add vertex to visited
    visited.set(vertex.key, true);
    // remove vertex from unvisited
    unvisited.delete(vertex.key);
  };

  // do dfs on all unvisited vertices
  while (unvisited.size > 0) {
    const key = unvisited.keys().next().value;
    // dfs
    depthFirstSearch(graph, key, {visitCallback, visited});
  }

  return result;
}
