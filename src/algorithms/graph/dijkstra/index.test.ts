import createGraph from '../../../data-structures/graph';
import dijkstra from './';

describe('Dijkstra', () => {
  it('should return undefined for empty graph', () => {
    const graph = createGraph();

    expect(dijkstra(graph, 'A')).toBeUndefined();
  });

  it('should return undefined for non existing vertex', () => {
    const graph = createGraph();

    graph.addVertex('A');

    expect(dijkstra(graph, 'B')).toBeUndefined();
  });

  it('should return minimum paths to all vertices in directed graph #1', () => {
    const graph = createGraph({
      directed: true,
    });

    graph.addVertices([1], [2], [3], [4], [5], [6], [7], [8]);
    graph.addEdge(0, 1, 4);
    graph.addEdge(0, 7, 8);
    graph.addEdge(1, 0, 4);
    graph.addEdge(1, 2, 8);
    graph.addEdge(1, 7, 11);
    graph.addEdge(2, 1, 8);
    graph.addEdge(2, 3, 7);
    graph.addEdge(2, 5, 4);
    graph.addEdge(2, 8, 2);
    graph.addEdge(3, 2, 7);
    graph.addEdge(3, 4, 9);
    graph.addEdge(3, 5, 14);
    graph.addEdge(4, 3, 9);
    graph.addEdge(4, 5, 10);
    graph.addEdge(5, 2, 4);
    graph.addEdge(5, 3, 14);
    graph.addEdge(5, 4, 10);
    graph.addEdge(5, 6, 2);
    graph.addEdge(6, 5, 2);
    graph.addEdge(6, 7, 1);
    graph.addEdge(6, 8, 6);
    graph.addEdge(7, 0, 8);
    graph.addEdge(7, 1, 11);
    graph.addEdge(7, 6, 1);
    graph.addEdge(7, 8, 7);
    graph.addEdge(8, 2, 2);
    graph.addEdge(8, 6, 6);
    graph.addEdge(8, 7, 7);

    const distances = dijkstra(graph, 0);

    expect(distances?.length).toEqual(9);
    expect(distances).toEqual([
      [0, 0],
      [1, 4],
      [7, 8],
      [2, 12],
      [6, 9],
      [8, 14],
      [5, 11],
      [3, 19],
      [4, 21],
    ]);
  });

  it('should return minimum paths to all vertices in directed graph #2', () => {
    const graph = createGraph({directed: true});

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B', 3);
    graph.addEdge('A', 'C', 9);
    graph.addEdge('A', 'E', 7);
    graph.addEdge('E', 'C', 10);
    graph.addEdge('E', 'D', 1);

    const distances = dijkstra(graph, 'A');

    expect(distances?.length).toEqual(5);
    expect(distances).toEqual([
      ['A', 0],
      ['B', 3],
      ['C', 9],
      ['E', 7],
      ['D', 8],
    ]);
  });

  it('should return minimum paths to all vertices in undirected graph #1', () => {
    const graph = createGraph({directed: false});

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');
    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 3);
    graph.addEdge('A', 'E', 7);
    graph.addEdge('B', 'C', 6);
    graph.addEdge('B', 'D', 5);
    graph.addEdge('E', 'C', 8);
    graph.addEdge('E', 'D', 2);
    graph.addEdge('D', 'C', 11);
    graph.addEdge('D', 'G', 10);
    graph.addEdge('D', 'F', 2);
    graph.addEdge('F', 'G', 3);
    graph.addEdge('E', 'G', 5);

    const distances = dijkstra(graph, 'A');

    expect(distances?.length).toEqual(7);
    expect(distances).toEqual([
      ['A', 0],
      ['B', 4],
      ['C', 3],
      ['E', 7],
      ['D', 9],
      ['G', 12],
      ['F', 11],
    ]);
  });

  it('should return minimum paths to all vertices in undirected graph with negative weights #1', () => {
    const graph = createGraph({directed: false});

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'C', 8);
    graph.addEdge('A', 'E', -2);
    graph.addEdge('B', 'C', 5);
    graph.addEdge('B', 'D', 4);
    graph.addEdge('B', 'F', -3);
    graph.addEdge('D', 'C', 11);
    graph.addEdge('E', 'C', -1);
    graph.addEdge('E', 'D', 2);

    const distances = dijkstra(graph, 'A');

    expect(distances?.length).toEqual(6);
    expect(distances).toEqual([
      ['A', 0],
      ['B', 1],
      ['C', -3],
      ['E', -2],
      ['D', 5],
      ['F', -2],
    ]);
  });
});
