import createGraph from '../../../data-structures/graph';
import ssc from './';

describe('StronglyConnectedComponents', () => {
  it('should return undefined for empty graph', () => {
    const graph = createGraph({directed: true});

    expect(ssc(graph)).toBeUndefined();
  });

  it('should find strongly connected components in simple graph', () => {
    const graph = createGraph({directed: true});

    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);
    graph.addEdge(2, 3);

    const components = ssc(graph);

    expect(components).toBeDefined();
    expect(components?.length).toBe(2);
    expect(components?.shift()).toEqual([0, 2, 1]);
    expect(components?.shift()).toEqual([3]);
  });

  it('should find strongly connected components in simple graph #2', () => {
    const graph = createGraph({directed: true});

    graph.addEdge(1, 0);
    graph.addEdge(0, 2);
    graph.addEdge(2, 1);
    graph.addEdge(0, 3);
    graph.addEdge(3, 4);

    const components = ssc(graph);

    expect(components).toBeDefined();
    expect(components?.length).toBe(3);
    expect(components?.shift()).toEqual([1, 2, 0]);
    expect(components?.shift()).toEqual([3]);
    expect(components?.shift()).toEqual([4]);
  });

  it('should find strongly connected components in simple graph #3', () => {
    const graph = createGraph({directed: true});

    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');
    graph.addEdge('B', 'D');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('F', 'D');
    graph.addEdge('G', 'F');
    graph.addEdge('G', 'H');
    graph.addEdge('H', 'I');
    graph.addEdge('I', 'J');
    graph.addEdge('J', 'G');
    graph.addEdge('J', 'K');

    const components = ssc(graph);

    expect(components).toBeDefined();
    expect(components?.length).toBe(4);
    expect(components?.shift()).toEqual(['G', 'J', 'I', 'H']);
    expect(components?.shift()).toEqual(['K']);
    expect(components?.shift()).toEqual(['A', 'C', 'B']);
    expect(components?.shift()).toEqual(['D', 'F', 'E']);
  });
});
