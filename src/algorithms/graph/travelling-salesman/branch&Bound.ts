import {Graph, Key} from '../../../data-structures/graph';

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

  // find the minimum edge cost
  const getFirstMin = (current: number): number => {
    let first = Infinity;
    for (let i = 0; i < len; i++) {
      if (i !== current && adjacencyMatrix[current][i] < min)
        first = adjacencyMatrix[current][i];
    }
    return first;
  };

  // find the second minimum edge cost
  const getSecondMin = (current: number): number => {
    let first = Infinity;
    let second = Infinity;
    for (let i = 0; i < len; i++) {
      if (i === current) continue;

      if (adjacencyMatrix[current][i] <= first) {
        second = first;
        first = adjacencyMatrix[current][i];
        continue;
      }
      if (
        adjacencyMatrix[current][i] <= second &&
        adjacencyMatrix[current][i] !== first
      ) {
        second = adjacencyMatrix[current][i];
      }
    }
    return second;
  };

  const tsp = (
    cycle: number[],
    cost: number,
    bound: number,
    result?: Result,
  ): Result => {
    // clone current cyle
    // for tsp recursion
    const currentCycle = [...cycle];
    // get current index (last element in cycle array)
    const level = currentCycle.length - 1;
    const current = currentCycle[level];

    // we are at the final vertex
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
        const temp = bound;
        // calculate current lower bound based on current level
        bound -=
          level === 0
            ? Math.round((getFirstMin(current) + getFirstMin(i)) / 2)
            : Math.round((getSecondMin(current) + getFirstMin(i)) / 2);

        // bound + cost is the current lower bound
        // if current lower bound < min continue with exploration
        if (bound + cost < min) {
          // mark as visited
          visited.set(i, true);
          // add index to cycle
          currentCycle.push(i);
          // call tsp
          result = tsp(
            currentCycle,
            cost + adjacencyMatrix[current][i],
            bound,
            result,
          );
        }

        // reset bound, visited and cycle for backtracking
        bound = temp;
        visited.set(i, false);
        currentCycle.pop();
      }
    }
    return result;
  };

  // set first to visited
  visited.set(0, true);

  // bound
  let initialBound = 0;
  // calculate initial lower bound for first vertex
  for (let i = 0; i < len; i++) {
    initialBound += getFirstMin(i) + getSecondMin(i);
  }
  // round it to integer
  initialBound = Math.round(
    initialBound === 1 ? initialBound / 2 + 1 : initialBound / 2,
  );

  // run tsp
  // start with vertex 0 and cost 0
  const result = tsp([0], 0, initialBound);
  // if nothing found
  if (!result) return undefined;
  // map indexes to vertex keys
  return [result[0].map((i) => vertices[i].key), result[1]];
}
