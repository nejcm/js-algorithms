import createGraph from '../../../data-structures/graph';
import bfs from './';

describe('BreadthFirstSearchGraph', () => {
  it('should search undirected graph', () => {
    const graph = createGraph();

    let callbackStub = jest.fn(() => true);
    bfs(graph, 'A', {visitCallback: callbackStub});
    expect(callbackStub).not.toBeCalled();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('E', 'G');
    graph.addEdge('G', 'C');

    callbackStub = jest.fn(() => true);
    bfs(graph, 'X', {visitCallback: callbackStub});
    expect(callbackStub).not.toBeCalled();

    callbackStub = jest.fn(() => true);
    bfs(graph, 'A', {visitCallback: callbackStub});
    expect(callbackStub).toBeCalledTimes(1);

    const visited: number[] = [];
    const customCallbackStub = jest.fn((k) => {
      visited.push(k);
    });
    bfs(graph, 'B', {visitCallback: customCallbackStub});
    expect(visited).toEqual(['B', 'C', 'D', 'E', 'G', 'F']);
    expect(customCallbackStub).toBeCalledTimes(6);
  });

  it('should search directed graph', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addVertex(7);
    graph.addVertex(8);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(2, 5);
    graph.addEdge(3, 6);
    graph.addEdge(6, 7);
    graph.addEdge(6, 8);

    let callbackStub = jest.fn(() => true);
    bfs(graph, -1, {visitCallback: callbackStub});
    expect(callbackStub).not.toBeCalled();

    callbackStub = jest.fn(() => true);
    bfs(graph, 0, {visitCallback: callbackStub});
    expect(callbackStub).toBeCalledTimes(1);

    const visited: number[] = [];
    const customCallbackStub = jest.fn((k) => {
      visited.push(k);
    });
    bfs(graph, 1, {visitCallback: customCallbackStub});
    expect(visited).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(customCallbackStub).toBeCalledTimes(8);
  });

  it('should exclude some vertices', () => {
    const graph = createGraph({directed: true});

    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(3, 5);
    graph.addEdge(0, 6);

    const alreadyVisited = new Map();
    alreadyVisited.set(3, true);
    const visited: number[] = [];
    const customCallbackStub = jest.fn((k) => {
      visited.push(k);
    });
    bfs(graph, 0, {
      visitCallback: customCallbackStub,
      visited: alreadyVisited,
    });
    expect(visited).toEqual([0, 1, 6, 2]);
    expect(customCallbackStub).toBeCalledTimes(4);
  });
});
