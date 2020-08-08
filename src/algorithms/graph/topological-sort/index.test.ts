import createGraph from '../../../data-structures/graph';
import topologicalSort from './';

describe('TopologicalSort', () => {
  it('should return undefined for empty graph', () => {
    const graph = createGraph({directed: true});

    expect(topologicalSort(graph)).toBeUndefined();
  });

  it('should throw error for undirected graph', () => {
    const graph = createGraph({directed: false});

    expect(() => topologicalSort(graph)).toThrowError();
  });

  it('should return ordered vertices', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);

    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(2, 3);
    graph.addEdge(2, 1);

    expect(topologicalSort(graph)?.map((v) => v.key)).toEqual([0, 1, 4, 2, 3, 5]);

    graph.addEdge(0, 5);

    expect(topologicalSort(graph)?.map((v) => v.key)).toEqual([0, 1, 4, 5, 2, 3]);

    graph.addVertex(6);
    graph.addVertex(7);
    graph.addVertex(8);

    graph.addEdge(4, 3);
    graph.addEdge(5, 6);
    graph.addEdge(5, 7);
    graph.addEdge(6, 8);

    expect(topologicalSort(graph)?.map((v) => v.key)).toEqual([
      0,
      1,
      4,
      3,
      5,
      6,
      8,
      7,
      2,
    ]);
  });
});
