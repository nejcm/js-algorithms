import createGraph from '../../../data-structures/graph';
import prim from './';

describe('Prim', () => {
  it('should return undefined for empty graph', () => {
    const graph = createGraph();

    expect(prim(graph)).toBeUndefined();
  });

  it('should throw error for directed graph', () => {
    const graph = createGraph({directed: true});

    expect(() => prim(graph)).toThrowError();
  });

  it('should find minimum spanning tree in graph #1', () => {
    const graph = createGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'D', 6);
    graph.addEdge('B', 'C', 3);
    graph.addEdge('B', 'D', 8);
    graph.addEdge('B', 'E', 5);
    graph.addEdge('C', 'E', 7);
    graph.addEdge('D', 'E', 9);

    const mst = prim(graph);

    expect(graph.getWeight()).toEqual(40);
    expect(mst?.getWeight()).toEqual(16);
    expect(mst?.vertices.size).toEqual(graph.vertices.size);
    expect(mst?.getAllEdges().length).toEqual(graph.vertices.size - 1);

    expect(mst?.getAllEdges()).toEqual([
      {start: 'A', end: 'B', weight: 2},
      {start: 'A', end: 'D', weight: 6},
      {start: 'B', end: 'C', weight: 3},
      {start: 'B', end: 'E', weight: 5},
    ]);
  });

  it('should find minimum spanning tree in graph #2', () => {
    const graph = createGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');

    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'D', 3);
    graph.addEdge('A', 'C', 3);
    graph.addEdge('B', 'C', 4);
    graph.addEdge('B', 'E', 3);
    graph.addEdge('D', 'F', 7);
    graph.addEdge('E', 'C', 1);
    graph.addEdge('E', 'F', 8);
    graph.addEdge('F', 'G', 9);
    graph.addEdge('F', 'C', 6);

    expect(graph.getWeight()).toEqual(46);

    const mst = prim(graph);

    expect(mst?.getWeight()).toEqual(24);
    expect(mst?.vertices.size).toEqual(graph.vertices.size);
    expect(mst?.getAllEdges().length).toEqual(graph.vertices.size - 1);

    expect(mst?.getAllEdges()).toEqual([
      {start: 'A', end: 'B', weight: 2},
      {start: 'A', end: 'C', weight: 3},
      {start: 'A', end: 'D', weight: 3},
      {start: 'C', end: 'E', weight: 1},
      {start: 'C', end: 'F', weight: 6},
      {start: 'F', end: 'G', weight: 9},
    ]);
  });

  it('should find minimum spanning tree in graph #3', () => {
    const graph = createGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'E', -1);
    graph.addEdge('A', 'B', -5);
    graph.addEdge('C', 'D', 8);
    graph.addEdge('C', 'E', 3);
    graph.addEdge('D', 'E', -3);

    expect(graph.getWeight()).toEqual(2);

    const mst = prim(graph);

    expect(mst?.getWeight()).toEqual(-6);
    expect(mst?.vertices.size).toEqual(graph.vertices.size);
    expect(mst?.getAllEdges().length).toEqual(graph.vertices.size - 1);

    expect(mst?.getAllEdges()).toEqual([
      {start: 'A', end: 'B', weight: -5},
      {start: 'A', end: 'E', weight: -1},
      {start: 'E', end: 'D', weight: -3},
      {start: 'E', end: 'C', weight: 3},
    ]);
  });
});
