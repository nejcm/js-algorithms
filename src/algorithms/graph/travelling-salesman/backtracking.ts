import {Graph, Key} from '../../../data-structures/graph';

// same as hamiltonian cycle
// except implemented directly
export default function travellingSalesman<T>(
  graph: Graph<T>,
): [Key[], number] | undefined {
  // is directed
  if (graph.directed) {
    throw new Error(
      'Travelling salesman algorithms works only for undirected graphs.',
    );
  }
  // is empty
  if (graph.isEmpty()) return undefined;

  // graph vertices
  const vertices = graph.getAllVertices();
  const len = vertices.length;
  const adjacencyMatrix = graph.getAdjacencyMatrix();
  // visited vertices
  const visited = new Map<number, boolean>();
  // min
  let min = Infinity;

  type Result = [number[], number] | undefined;

  const tsp = (cycle: number[], cost: number, result?: Result): Result => {
    // clone current cyle
    // for tsp recursion
    const currentCycle = [...cycle];
    // get current index (last element in cycle array)
    const current = cycle[cycle.length - 1];

    // we are at the end
    if (len === currentCycle.length) {
      // is connected from last to first vertex
      if (adjacencyMatrix[current][currentCycle[0]] !== Infinity) {
        const completeCost = cost + adjacencyMatrix[current][currentCycle[0]];
        // is shorter than the current
        if (completeCost < min) {
          min = completeCost;
          // add first index to the end
          currentCycle.push(currentCycle[0]);
          return [currentCycle, completeCost];
        }
      }
      return result;
    }

    // backtracking
    // loop all connected vertices
    for (let i = 0; i < len; i++) {
      // is not visited and is connected (has edge)
      if (!visited.get(i) && adjacencyMatrix[current][i] !== Infinity) {
        // mark as visited
        visited.set(i, true);
        // add index to cycle
        currentCycle.push(i);
        // call tsp
        result = tsp(currentCycle, cost + adjacencyMatrix[current][i], result);

        // reset visited and cycle for backtracking
        visited.set(i, false);
        currentCycle.pop();
      }
    }
    return result;
  };

  // set first to visited
  visited.set(0, true);
  // run tsp
  // start with vertex 0 and cost 0
  const result = tsp([0], 0);
  // if nothing found
  if (!result) return undefined;
  // map indexes to vertex keys
  return [result[0].map((i) => vertices[i].key), result[1]];
}
