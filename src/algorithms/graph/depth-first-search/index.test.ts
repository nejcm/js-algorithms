import createGraph from '../../../data-structures/graph';
import dfs from './';

describe('DepthFirstSearchGraph', () => {
  it('should search undirected graph', () => {
    const graph = createGraph();

    let callbackStub = jest.fn(() => true);
    dfs(graph, 'A', callbackStub);
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
    dfs(graph, 'X', callbackStub);
    expect(callbackStub).not.toBeCalled();

    callbackStub = jest.fn(() => true);
    dfs(graph, 'A', callbackStub);
    expect(callbackStub).toBeCalledTimes(1);

    let visited: number[] = [];
    let customCallbackStub = jest.fn((k) => {
      visited.push(k);
      return true;
    });
    dfs(graph, 'B', customCallbackStub);
    expect(visited).toEqual(['B', 'C', 'E', 'F', 'G', 'D']);
    expect(customCallbackStub).toBeCalledTimes(6);

    visited = [];
    customCallbackStub = jest.fn((k) => {
      visited.push(k);
      return k !== 'F';
    });
    dfs(graph, 'B', customCallbackStub);
    expect(visited).toEqual(['B', 'C', 'E', 'F']);
    expect(customCallbackStub).toBeCalledTimes(4);
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
    dfs(graph, -1, callbackStub);
    expect(callbackStub).not.toBeCalled();

    callbackStub = jest.fn(() => true);
    dfs(graph, 0, callbackStub);
    expect(callbackStub).toBeCalledTimes(1);

    let visited: number[] = [];
    let customCallbackStub = jest.fn((k) => {
      visited.push(k);
      return true;
    });
    dfs(graph, 1, customCallbackStub);
    expect(visited).toEqual([1, 2, 3, 6, 7, 8, 4, 5]);
    expect(customCallbackStub).toBeCalledTimes(8);

    visited = [];
    customCallbackStub = jest.fn((k) => {
      visited.push(k);
      return k !== 6;
    });
    dfs(graph, 1, customCallbackStub);
    expect(visited).toEqual([1, 2, 3, 6]);
    expect(customCallbackStub).toBeCalledTimes(4);
  });
});
