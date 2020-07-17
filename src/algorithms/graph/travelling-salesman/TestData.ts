import createGraph, {Graph, Key} from '../../../data-structures/graph';

type TravellingSalesman<T> = (graph: Graph<T>) => [Key[], number] | undefined;

const Tester = {
  testEmpty: <T>(travellingSalesman: TravellingSalesman<T>): void => {
    const graph = createGraph<T>();
    expect(travellingSalesman(graph)).toBeUndefined();

    const directedGraph = createGraph<T>({directed: true});
    expect(() => travellingSalesman(directedGraph)).toThrowError();
  },

  testFound: <T>(travellingSalesman: TravellingSalesman<T>): void => {
    const graph = createGraph<T>();

    graph.addEdge('A', 'B', 1);
    graph.addEdge('B', 'D', 3);
    graph.addEdge('D', 'C', 1);
    graph.addEdge('C', 'A', 2);

    graph.addEdge('A', 'D', 5);
    graph.addEdge('B', 'C', 6);

    const result = travellingSalesman(graph) as [Key[], number];
    let [keys, cost] = result;

    expect(result).toBeDefined();
    expect(keys.length).toBe(5);
    expect(keys).toEqual(['A', 'B', 'D', 'C', 'A']);
    expect(cost).toBe(7);

    graph.vertices.clear();
    graph.addEdge('A', 'B', 1);
    graph.addEdge('B', 'C', 3);
    graph.addEdge('C', 'D', 2);
    graph.addEdge('D', 'E', 8);
    graph.addEdge('E', 'A', 1);
    graph.addEdge('B', 'D', 4);
    graph.addEdge('C', 'E', 4);

    [keys, cost] = travellingSalesman(graph) as [Key[], number];
    expect(keys).toEqual(['A', 'B', 'D', 'C', 'E', 'A']);
    expect(cost).toBe(12);

    graph.vertices.clear();
    graph.addEdge(0, 1, 10);
    graph.addEdge(0, 2, 15);
    graph.addEdge(0, 3, 20);
    graph.addEdge(1, 2, 35);
    graph.addEdge(1, 3, 25);
    graph.addEdge(2, 3, 30);

    [keys, cost] = travellingSalesman(graph) as [Key[], number];
    expect(keys).toEqual([0, 1, 3, 2, 0]);
    expect(cost).toBe(80);
  },

  testNotFound: <T>(travellingSalesman: TravellingSalesman<T>): void => {
    const graph = createGraph<T>();

    graph.addEdge('A', 'B', 1);
    graph.addEdge('B', 'D', 3);
    graph.addEdge('D', 'C', 1);
    graph.addEdge('C', 'F', 2);
    graph.addEdge('F', 'E', 4);

    let result = travellingSalesman(graph);
    expect(result).toBeUndefined();

    graph.vertices.clear();
    graph.addEdge('A', 'B', 1);
    graph.addEdge('B', 'D', 3);
    graph.addEdge('D', 'C', 1);
    graph.addEdge('C', 'E', 2);
    graph.addEdge('A', 'D', 5);
    graph.addEdge('B', 'C', 4);

    result = travellingSalesman(graph);
    expect(result).toBeUndefined();

    graph.vertices.clear();
    graph.addEdge(0, 1, 0.5);
    graph.addEdge(0, 2, 0);
    graph.addEdge(1, 2, 0);
    graph.addEdge(3, 4, 0);
    graph.addEdge(3, 6, 0);
    graph.addEdge(4, 5, 0);
    graph.addEdge(5, 6, 0);

    result = travellingSalesman(graph) as [Key[], number];
    expect(result).toBeUndefined();
  },
};

export default Tester;
