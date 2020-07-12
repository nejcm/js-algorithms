import createGraph from './';

describe('Graph', () => {
  it('should create a graph', () => {
    const graph = createGraph();
    expect(graph).toBeDefined();
    expect(graph.isEmpty()).toBeTruthy();
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

    expect(graph.isEmpty()).toBeFalsy();
    expect(graph.toString()).toEqual('A, B, C');
    expect(graph.toString(' - ')).toEqual('A - B - C');

    expect(graph.addVertex('X', {test: 'value'})).toMatchObject({
      key: 'X',
      value: {test: 'value'},
    });

    expect(graph.toString()).toEqual('A, B, C, X');

    graph.addVertices([['D'], ['E']]);

    const newVertices = graph.addVertices([['D'], ['E', 'test']]);
    expect(newVertices.length).toEqual(2);
    expect(newVertices[0]).toMatchObject({
      key: 'D',
    });
    expect(newVertices[1]).toMatchObject({
      key: 'E',
      value: 'test',
    });

    expect(graph.toString()).toEqual('A, B, C, X, D, E');
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

    expect(graph.addEdge(20, 5, 2)).toBeTruthy();
    expect(graph.hasVertex(20)).toBeTruthy();
    expect(graph.hasEdge(20, 5)).toBeTruthy();
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

  it('should get vertex neighbors and edges with weights in undirected graph', () => {
    const graph = createGraph();

    expect(graph.getNeighbors(1)).toBeUndefined();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addEdge(1, 3, 5);
    graph.addEdge(1, 4);
    graph.addEdge(1, 6);
    graph.addEdge(5, 6, 1);

    expect(graph.getNeighbors(1)?.length).toEqual(3);
    expect(graph.getNeighbors(2)?.length).toEqual(0);
    expect(graph.getNeighbors(3)?.length).toEqual(1);
    expect(graph.getNeighbors(6)?.length).toEqual(2);
    expect(graph.getWeight()).toEqual(6);

    const allEdges = graph.getAllEdges();
    expect(allEdges.length).toEqual(4);
    expect(allEdges).toEqual([
      {start: 1, end: 3, weight: 5},
      {start: 1, end: 4, weight: 0},
      {start: 1, end: 6, weight: 0},
      {start: 5, end: 6, weight: 1},
    ]);

    expect(graph.getEdges(0)).toBeUndefined();

    const vertexEdges = graph.getEdges(1);
    expect(vertexEdges?.length).toEqual(3);
    expect(vertexEdges).toEqual([
      {start: 1, end: 3, weight: 5},
      {start: 1, end: 4, weight: 0},
      {start: 1, end: 6, weight: 0},
    ]);
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
    expect(graph.getAllEdges().length).toEqual(2);
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

  it('should call toString callback', () => {
    const graph = createGraph<{[key: string]: unknown}>({directed: true});

    graph.addVertex('1', {val: 'V1'});
    graph.addVertex('2', {val: 'V2'});
    graph.addVertex('3', {val: 'V3'});
    graph.addEdge('1', '2');
    graph.addEdge('2', '3');

    expect(
      graph.toString(' <-> ', (_k, _i, vertex) => String(vertex.value?.val)),
    ).toEqual('V1 <-> V2 <-> V3');
  });
});
