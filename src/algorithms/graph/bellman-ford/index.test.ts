import createGraph from '../../../data-structures/graph';
import bellmanFord from './';

describe('BellmanFord', () => {
  it('should find minimum paths to all vertices for undirected graph', () => {
    const graph = createGraph();

    expect(bellmanFord(graph, 0)).toBeUndefined();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');
    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'E', 7);
    graph.addEdge('A', 'C', 3);
    graph.addEdge('B', 'C', 6);
    graph.addEdge('B', 'D', 5);
    graph.addEdge('E', 'C', 8);
    graph.addEdge('E', 'D', 2);
    graph.addEdge('D', 'C', 11);
    graph.addEdge('D', 'G', 10);
    graph.addEdge('D', 'F', 2);
    graph.addEdge('F', 'G', 3);
    graph.addEdge('E', 'G', 5);

    expect(bellmanFord(graph, 'X')).toBeUndefined();

    expect(bellmanFord(graph, 'A')).toEqual([
      ['A', 0],
      ['B', 4],
      ['C', 3],
      ['D', 9],
      ['E', 7],
      ['F', 11],
      ['G', 12],
      ['H', Infinity],
    ]);
  });

  it('should find minimum paths to all vertices for directed graph', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(0, 1, -1);
    graph.addEdge(0, 2, 4);
    graph.addEdge(1, 2, 3);
    graph.addEdge(1, 3, 2);
    graph.addEdge(1, 4, 2);
    graph.addEdge(3, 2, 5);
    graph.addEdge(3, 1, 1);
    graph.addEdge(4, 3, -3);

    expect(bellmanFord(graph, -1)).toBeUndefined();

    expect(bellmanFord(graph, 0)).toEqual([
      [0, 0],
      [1, -1],
      [2, 2],
      [3, -2],
      [4, 1],
    ]);
  });

  it('should detect negative weight cycle in directed graph', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(1, 2, 4);
    graph.addEdge(1, 4);
    graph.addEdge(2, 4, 5);
    graph.addEdge(3, 2, -10);
    graph.addEdge(4, 3, 3);

    expect(() => bellmanFord(graph, 1)).toThrowError();
  });
});
