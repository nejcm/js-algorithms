import createGraph from '../../../data-structures/graph';
import aStar, {aStarGraph, HeuristicCallbackKeys} from './';

describe('AStar', () => {
  it('should return undefined for empty graph or non existing vertex or edges', () => {
    const graph = createGraph();

    expect(aStarGraph(graph, 'A', 'B')).toBeUndefined();

    graph.addVertex('A');
    graph.addVertex('B');

    expect(aStarGraph(graph, 'A', 'B')).toBeUndefined();

    graph.addEdge('A', 'B', 3);

    expect(aStarGraph(graph, 'A', 'H')).toBeUndefined();
  });

  it('should find shortest path between vertices in graph', () => {
    const graph = createGraph();

    graph.addEdge('A', 'B', 5);

    expect(aStarGraph(graph, 'A', 'A')).toEqual([['A'], 0]);

    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'D', 2);
    graph.addEdge('B', 'E', 1);
    graph.addEdge('B', 'F', 3);
    graph.addEdge('C', 'G', 4);
    graph.addEdge('D', 'E', 4);
    graph.addEdge('E', 'H', 5);
    graph.addEdge('F', 'H', 4);
    graph.addEdge('G', 'H', 8);

    expect(aStarGraph(graph, 'A', 'H')).toEqual([['A', 'B', 'E', 'H'], 11]);
  });

  it('should find shortest path between vertices in graph with custom heuristic function #2', () => {
    const graph = createGraph<number>();

    graph.addVertices(
      ['A', 1],
      ['B', 4],
      ['C', 3],
      ['D', 5],
      ['E', 2],
      ['F', 1],
      ['G', 1],
      ['H', 0],
    );

    graph.addEdge('A', 'B', 5);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'D', 2);
    graph.addEdge('B', 'E', 1);
    graph.addEdge('B', 'F', 3);
    graph.addEdge('C', 'G', 4);
    graph.addEdge('D', 'E', 4);
    graph.addEdge('E', 'H', 5);
    graph.addEdge('F', 'H', 4);
    graph.addEdge('G', 'H', 1);

    const getHeuristic: HeuristicCallbackKeys = (i, j) =>
      (graph.getVertex(i)?.value || 0) + (graph.getVertex(j)?.value || 0);

    expect(aStarGraph(graph, 'A', 'H', getHeuristic)).toEqual([
      ['A', 'C', 'G', 'H'],
      10,
    ]);
  });

  it('should find shortest path between vertices in matrix', () => {
    const graph = createGraph<number>();

    graph.addVertices(['A'], ['B'], ['C'], ['D'], ['E'], ['F'], ['G'], ['H']);

    graph.addEdge('A', 'B', 5);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'D', 2);
    graph.addEdge('B', 'E', 1);
    graph.addEdge('B', 'F', 3);
    graph.addEdge('C', 'G', 4);
    graph.addEdge('D', 'E', 4);
    graph.addEdge('E', 'H', 5);
    graph.addEdge('F', 'H', 4);
    graph.addEdge('G', 'H', 1);

    const matrix = graph.getAdjacencyMatrix();

    expect(aStar([], 0, 7)).toBeUndefined();
    expect(aStar([[1], [2]], -1, 7)).toBeUndefined();
    expect(aStar(matrix, 0, 7)).toEqual([[0, 2, 6, 7], 10]);
  });
});
