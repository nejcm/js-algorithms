import {Edge, Graph, Key} from '../../../data-structures/graph';
import hamiltonianCycles from '../hamiltonian-cycle';

export default function travellingSalesman<T>(
  graph: Graph<T>,
): [Key[], number] | undefined {
  // get all hamiltonian cycles
  const cycles = hamiltonianCycles(graph);
  if (!cycles) return cycles;

  // for each hamiltonian cycle
  // check if first and last vertices are connected
  // and find min from all
  let min = Infinity;
  let result: [Key[], number] | undefined;
  cycles.forEach((cycle) => {
    let sum = 0;
    // add first element to the end
    cycle.push(cycle[0]);

    // calculate cost for cycle
    for (let i = 1; i < cycle.length; i++) {
      const edge = graph.getEdge(cycle[i - 1], cycle[i]) as Edge;
      sum += edge.weight as number;
    }

    // found smaller
    if (sum < min) {
      min = sum;
      result = [cycle, min];
    }
  });

  return result;
}
