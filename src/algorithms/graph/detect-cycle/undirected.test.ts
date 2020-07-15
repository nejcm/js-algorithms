import createGraph from '../../../data-structures/graph';
import detectCycle from './undirected';

describe('DetectCycleUndirected', () => {
  it('should throw an error for directed graph', () => {
    const graph = createGraph({directed: true});

    expect(() => detectCycle(graph)).toThrowError();
  });

  it('should return true for cycle in graph', () => {
    const graph = createGraph({directed: false});

    expect(detectCycle(graph)).toBeFalsy();

    graph.addEdge(1, 0);
    graph.addEdge(0, 2);
    graph.addEdge(2, 1);
    graph.addEdge(0, 3);
    graph.addEdge(3, 4);

    expect(detectCycle(graph)).toBeTruthy();
  });

  it('should return false for graph without a cycle', () => {
    const graph = createGraph({directed: false});

    graph.addEdge(0, 1);
    graph.addEdge(1, 2);

    expect(detectCycle(graph)).toBeFalsy();
  });

  it('should return true for cycle in graph #', () => {
    const graph = createGraph({directed: false});

    graph.addEdge(0, 5);
    graph.addEdge(0, 1);
    graph.addEdge(1, 4);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);

    expect(detectCycle(graph)).toBeFalsy();

    graph.addEdge(3, 4);

    expect(detectCycle(graph)).toBeTruthy();
  });
});
