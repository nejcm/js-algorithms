import createGraph from './';

describe('Graph', () => {
  it('should create a graph', () => {
    const graph = createGraph();
    expect(graph).toBeDefined();
    expect(graph.vertices).toBeDefined();
    expect(graph.directed).toBeFalsy();

    const directedGraph = createGraph({directed: true});
    expect(directedGraph).toBeDefined();
    expect(directedGraph.vertices).toBeDefined();
    expect(directedGraph.directed).toBeTruthy();
  });

  it('should add vertex to undirected graph', () => {
    const graph = createGraph();
    expect(graph.toString()).toEqual('');

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('B');
    graph.addVertex('C');

    expect(graph.toString()).toEqual('A, B, C');
    expect(graph.toString(' - ')).toEqual('A - B - C');

    graph.addVertex('X', {test: 'test'}, [['A'], ['C', {weight: 2}]]);

    expect(graph.toString()).toEqual('A, B, C, X');
  });

  it('should delete vertex from undirected graph', () => {
    const graph = createGraph();

    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.deleteVertex('B')).toBeTruthy();
    expect(graph.toString()).toEqual('A');
    expect(graph.deleteVertex('B')).toBeFalsy();

    expect(graph.deleteVertex('A')).toBeTruthy();
    expect(graph.toString()).toEqual('');
  });

  it('should get vertex and vertices from undirected graph', () => {
    const graph = createGraph();

    graph.addVertex(10);
    graph.addVertex(1);
    graph.addVertex(5);

    expect(graph.getVertex(0)).toBeUndefined();
    expect(graph.getVertex(1)).toBeDefined();
    expect(graph.hasVertex(5)).toBeTruthy();
    expect(graph.hasVertex(3)).toBeFalsy();
    expect(graph.getAllVertices().length).toEqual(3);
  });

  it('should add edge to vertex in undirected graph', () => {
    const graph = createGraph();

    graph.addVertex(1);
    graph.addVertex(5);
    graph.addVertex(10);
    graph.addEdge(1, 5);
    graph.addEdge(10, 5, 2);

    expect(graph.addEdge(20, 5, 2)).toBeFalsy();
    expect(graph.hasEdge(1, 5)).toBeTruthy();
    expect(graph.getEdge(5, 1)).toBeDefined();
    expect(graph.hasEdge(1, 10)).toBeFalsy();
    expect(graph.getEdge(10, 5)?.weight).toEqual(2);
    expect(graph.getEdge(5, 10)?.weight).toEqual(2);
  });

  it('should delete edge from vertex in undirected graph', () => {
    const graph = createGraph();

    graph.addVertex('X');
    graph.addVertex('Y');
    graph.addVertex('Z');
    graph.addEdge('X', 'Z');

    expect(graph.hasEdge('Z', 'X')).toBeTruthy();
    expect(graph.deleteEdge('Z', 'X')).toBeTruthy();
    expect(graph.deleteEdge('M', 'X')).toBeFalsy();
    expect(graph.hasEdge('Z', 'X')).toBeFalsy();
  });

  it('should get vertex neighbors and weight in undirected graph', () => {
    const graph = createGraph();

    expect(graph.getNeighbors(1)).toBeUndefined();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(1, 3, 5);
    graph.addEdge(1, 4);

    expect(graph.getNeighbors(1)?.length).toEqual(2);
    expect(graph.getNeighbors(2)?.length).toEqual(0);
    expect(graph.getNeighbors(3)?.length).toEqual(1);
    expect(graph.getWeight()).toEqual(10);
  });

  it('should also delete nodes when vertex deleted in undirected graph', () => {
    const graph = createGraph();

    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    expect(graph.hasEdge(1, 2)).toBeTruthy();
    expect(graph.hasEdge(1, 4)).toBeTruthy();
    expect(graph.hasEdge(4, 1)).toBeTruthy();
    graph.deleteVertex(2);
    expect(graph.hasEdge(1, 2)).toBeFalsy();
    graph.deleteVertex(4);
    expect(graph.hasEdge(1, 4)).toBeFalsy();
    expect(graph.hasEdge(4, 1)).toBeFalsy();
  });

  it('should add edge to vertex and get weight in directed graph', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(1);
    graph.addVertex(5);
    graph.addVertex(10);
    graph.addEdge(1, 5);
    graph.addEdge(10, 5, 2);

    expect(graph.hasEdge(1, 5)).toBeTruthy();
    expect(graph.hasEdge(5, 1)).toBeFalsy();
    expect(graph.getWeight()).toEqual(2);
  });

  it('should delete edge from vertex in directed graph', () => {
    const graph = createGraph({directed: true});

    graph.addVertex('X');
    graph.addVertex('Y');
    graph.addVertex('Z');
    graph.addEdge('X', 'Z');
    graph.addEdge('Z', 'X');

    expect(graph.hasEdge('X', 'Z')).toBeTruthy();
    expect(graph.hasEdge('Z', 'X')).toBeTruthy();
    expect(graph.deleteEdge('Z', 'X')).toBeTruthy();
    expect(graph.hasEdge('Z', 'X')).toBeFalsy();
    expect(graph.hasEdge('X', 'Z')).toBeTruthy();
  });
});
