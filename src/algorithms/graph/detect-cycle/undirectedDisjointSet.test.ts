import createGraph from '../../../data-structures/graph';
import detectCycle from './undirectedDisjointSet';

describe('DetectCycleUndirectedDisjointSet', () => {
  it('should throw an error for directed graph', () => {
    const graph = createGraph({directed: true});

    expect(() => detectCycle(graph)).toThrowError();
  });

  it('should find a cycle in graph', () => {
    const graph = createGraph({directed: false});

    expect(detectCycle(graph)).toBeFalsy();

    graph.addVertices(['A'], ['B'], ['C'], ['D']);
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');

    expect(detectCycle(graph)).toBeFalsy();

    graph.addEdge('C', 'A');

    expect(detectCycle(graph)).toBeTruthy();
  });

  it('should find a cycle in graph #2', () => {
    const graph = createGraph({directed: false});

    graph.addVertices(['A'], ['B'], ['C'], ['D'], ['E'], ['F']);
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'F');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'D');

    expect(detectCycle(graph)).toBeFalsy();

    graph.addEdge('D', 'E');

    expect(detectCycle(graph)).toBeTruthy();
  });
});
