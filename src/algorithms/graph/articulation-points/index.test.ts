import createGraph from '../../../data-structures/graph';
import articulationPoints from './';

describe('ArticulationPoints', () => {
  it('should find articulation points in graph', () => {
    const graph = createGraph();

    expect(articulationPoints(graph)).toBeUndefined();

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

    expect(articulationPoints(graph)?.map((v) => v.key)).toEqual([3, 0]);
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

    expect(articulationPoints(graph)?.map((v) => v.key)).toEqual([2, 1]);
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

    expect(articulationPoints(graph)?.map((v) => v.key)).toEqual([1]);
  });

  it('should find articulation points in graph with back edge', () => {
    const graph = createGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('C', 'E');

    expect(articulationPoints(graph)?.map((v) => v.key)).toEqual(['C']);
  });
});
