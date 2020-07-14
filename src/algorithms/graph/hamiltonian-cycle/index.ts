import {Graph, Key} from '../../../data-structures/graph';

export default function hamiltonianCycle<T>(
  graph: Graph<T>,
): Key[][] | undefined {
  // is empty
  if (graph.isEmpty()) return undefined;

  // cycles result
  const cycles: Key[][] = [];
  // graph vertices
  const vertices = graph.getAllVertices();
  const len = vertices.length;
  const adjacencyMatrix = graph.getAdjacencyMatrix();

  // check if first and last vertex are connected
  const isCycle = (cycle: number[]): boolean => {
    return adjacencyMatrix[cycle[cycle.length - 1]][cycle[0]] !== Infinity;
  };

  // check if vertex is a valid candidate
  const isValid = (cycle: number[], candidateIndex: number): boolean => {
    // return false if no edge between last vertex and candidate
    if (adjacencyMatrix[cycle[cycle.length - 1]][candidateIndex] === Infinity) {
      return false;
    }
    // check if candidate already in cycle
    return !cycle.includes(candidateIndex);
  };

  const findHamiltonianCycles = (cycle: number[]): void => {
    // clone current cyle
    // for dfs recursion
    const currentCycle = [...cycle];

    // check if cycle is complete
    // and valid Hamiltonian path
    if (len === currentCycle.length) {
      if (isCycle(currentCycle)) {
        // save cycle
        // map indexes to vertex keys
        cycles.push(currentCycle.map((index) => vertices[index].key));
      }
      return;
    }

    // loop vertices
    for (let i = 0; i < len; i++) {
      // check if vertex index is valid candidate
      if (isValid(currentCycle, i)) {
        // add vertex index to cycle
        currentCycle.push(i);

        // find other vertices
        findHamiltonianCycles(currentCycle);

        // backtrack: remove last vertex index to try another one
        currentCycle.pop();
      }
    }
  };

  // current cycle paths
  // start with vertex 0
  const cycle: number[] = [0];
  // run algo
  findHamiltonianCycles(cycle);
  return cycles;
}
