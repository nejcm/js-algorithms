import createGraph from '../../../data-structures/graph';
import hamiltonianCycle from './';

describe('HamiltonianCycle', () => {
  it('should return undefined for empty graph', () => {
    const graph = createGraph();

    expect(hamiltonianCycle(graph)).toBeUndefined();
  });

  it('should find all hamiltonian paths in graph', () => {
    const graph = createGraph();

    graph.addVertices(['A'], ['B'], ['C'], ['D'], ['E']);

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');

    const cyles = hamiltonianCycle(graph);

    expect(cyles?.length).toBe(8);

    expect(cyles).toEqual([
      ['A', 'B', 'C', 'D', 'E'],
      ['A', 'B', 'E', 'D', 'C'],
      ['A', 'C', 'B', 'D', 'E'],
      ['A', 'C', 'D', 'B', 'E'],
      ['A', 'C', 'D', 'E', 'B'],
      ['A', 'E', 'B', 'D', 'C'],
      ['A', 'E', 'D', 'B', 'C'],
      ['A', 'E', 'D', 'C', 'B'],
    ]);
  });

  it('should return empty array for graph without hamiltonian cycle', () => {
    const graph = createGraph();

    graph.addVertices([1], [2], [3], [4], [5]);

    graph.addEdge(1, 2);
    graph.addEdge(1, 4);
    graph.addEdge(2, 1);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(2, 5);
    graph.addEdge(3, 2);
    graph.addEdge(3, 5);
    graph.addEdge(4, 1);
    graph.addEdge(4, 2);
    graph.addEdge(5, 2);
    graph.addEdge(5, 3);

    const cyles = hamiltonianCycle(graph);

    expect(cyles?.length).toBe(0);
  });
});
