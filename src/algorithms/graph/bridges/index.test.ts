import createGraph from '../../../data-structures/graph';
import bridges from './';

describe('Bridges', () => {
  it('should find articulation points in graph', () => {
    const graph = createGraph();

    expect(bridges(graph)).toBeUndefined();

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(1, 0);
    graph.addEdge(0, 2);
    graph.addEdge(2, 1);
    graph.addEdge(0, 3);
    graph.addEdge(3, 4);

    expect(bridges(graph)).toEqual([
      [3, 4],
      [0, 3],
    ]);
  });

  it('should find articulation points in graph #2', () => {
    const graph = createGraph();

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);

    expect(bridges(graph)).toEqual([
      [2, 3],
      [1, 2],
      [0, 1],
    ]);
  });

  it('should find articulation points in graph #3', () => {
    const graph = createGraph();

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(1, 6);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);

    expect(bridges(graph)).toEqual([[1, 6]]);
  });

  it('should find articulation points in graph with back edge', () => {
    const graph = createGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('A', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'G');
    graph.addEdge('E', 'F');
    graph.addEdge('G', 'F');
    graph.addEdge('F', 'H');

    expect(bridges(graph)).toEqual([
      ['F', 'H'],
      ['D', 'E'],
      ['C', 'D'],
    ]);
  });
});
