import createGraph from '../../../data-structures/graph';
import floydWarshall from './';

describe('FloydWarshall', () => {
  it('should return undefined for empty graph', () => {
    const graph = createGraph();

    expect(floydWarshall(graph)).toBeUndefined();
  });

  it('should return minimum paths for all vertices in graph #1', () => {
    const graph = createGraph({directed: true});

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B', 3);
    graph.addEdge('B', 'A', 8);
    graph.addEdge('A', 'D', 7);
    graph.addEdge('D', 'A', 2);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('C', 'A', 5);
    graph.addEdge('C', 'D', 1);

    const {vertices, distances} = floydWarshall(graph) || {};

    expect(vertices?.map((v) => v.key)).toEqual(['A', 'B', 'C', 'D']);
    expect(distances).toEqual([
      [0, 3, 5, 6],
      [5, 0, 2, 3],
      [3, 6, 0, 1],
      [2, 5, 7, 0],
    ]);
  });

  it('should return minimum paths for all vertices in graph #2', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(0, 1, 5);
    graph.addEdge(0, 3, 10);
    graph.addEdge(1, 2, 3);
    graph.addEdge(2, 3, 1);

    expect(graph.getWeight()).toEqual(19);

    const {vertices, distances} = floydWarshall(graph) || {};

    expect(vertices?.map((v) => v.key)).toEqual([0, 1, 2, 3]);
    expect(distances).toEqual([
      [0, 5, 8, 9],
      [Infinity, 0, 3, 4],
      [Infinity, Infinity, 0, 1],
      [Infinity, Infinity, Infinity, 0],
    ]);
  });

  it('should return minimum paths for all vertices in graph #3', () => {
    const graph = createGraph({directed: true});

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addEdge('F', 'E', 8);
    graph.addEdge('F', 'A', 10);
    graph.addEdge('E', 'D', 1);
    graph.addEdge('D', 'A', -4);
    graph.addEdge('D', 'C', -1);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('C', 'B', -2);
    graph.addEdge('B', 'A', 1);

    expect(graph.getWeight()).toEqual(15);

    const {vertices, distances} = floydWarshall(graph) || {};

    expect(vertices?.map((v) => v.key)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    expect(distances).toEqual([
      [0, 0, 2, Infinity, Infinity, Infinity, Infinity],
      [1, 0, 3, Infinity, Infinity, Infinity, Infinity],
      [-1, -2, 0, Infinity, Infinity, Infinity, Infinity],
      [-4, -4, -2, 0, Infinity, Infinity, Infinity],
      [-3, -3, -1, 1, 0, Infinity, Infinity],
      [5, 5, 7, 9, 8, 0, Infinity],
      [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0],
    ]);
  });
});
