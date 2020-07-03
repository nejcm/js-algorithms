import createTree from './index';

describe('SegmentTree', () => {
  it('should create empty tree', () => {
    const tree = createTree([]);
    expect(tree).toBeDefined();
    expect(tree.values).toEqual([]);
    expect(tree.nodes).toEqual([]);
    expect(tree.rangeQuery(0, 1)).toBeUndefined();
  });

  it('should build segment tree', () => {
    const arr = [1, 3];
    const tree = createTree(arr);
    expect(tree).toBeDefined();
    expect(tree.values.length).toEqual(arr.length);
    expect(tree.nodes.length).toEqual(2 * arr.length - 1);
    expect(tree.nodes).toEqual([4, 1, 3]);
  });

  it('should build segment tree with custom operation', () => {
    const arr = [-1, 3, 5];
    const tree = createTree(arr, {operation: Math.min, fallback: Infinity});
    expect(tree).toBeDefined();
    expect(tree.values.length).toEqual(arr.length);
    expect(tree.nodes.length).toEqual(2 * 4 - 1);
    expect(tree.nodes).toEqual([-1, -1, 5, -1, 3, null, null]);
  });

  it('should build max array', () => {
    const array = [-10, 5, 10, 0];
    const segmentTree = createTree(array, {
      operation: Math.max,
      fallback: -Infinity,
    });

    expect(segmentTree.nodes).toEqual([10, 5, 10, -10, 5, 10, 0]);
    expect(segmentTree.nodes.length).toEqual(2 * array.length - 1);
  });

  it('should build tree from array that is not power of 2 length', () => {
    const arr = [-1, 3, 4, 0, 2, 1];
    const segmentTree = createTree(arr, {
      operation: Math.min,
      fallback: Infinity,
    });

    expect(segmentTree.nodes).toEqual([
      -1,
      -1,
      0,
      -1,
      4,
      0,
      1,
      -1,
      3,
      null,
      null,
      0,
      2,
      null,
      null,
    ]);
    expect(segmentTree.nodes.length).toEqual(2 * 8 - 1);
  });

  it('should sum values in range', () => {
    const arr = [10, 2, 5, -2, -3, 10, 1, 8, -6, 4];
    const segmentTree = createTree(arr);
    expect(segmentTree.rangeQuery(0, 0)).toEqual(10);
    expect(segmentTree.rangeQuery(0, 1)).toEqual(12);
    expect(segmentTree.rangeQuery(0, 9)).toEqual(29);
    expect(segmentTree.rangeQuery(1, 3)).toEqual(5);
    expect(segmentTree.rangeQuery(1, 6)).toEqual(13);
    expect(segmentTree.rangeQuery(4, 2)).toEqual(0);
    expect(segmentTree.rangeQuery(6, 7)).toEqual(9);
    expect(segmentTree.rangeQuery(5, 9)).toEqual(17);
  });

  it('should find min in range', () => {
    const arr = [10, 2, 5, -2, -3, 10, 1, 8, -6, 4];
    const segmentTree = createTree(arr, {
      operation: Math.min,
      fallback: Infinity,
    });
    expect(segmentTree.rangeQuery(0, 0)).toEqual(10);
    expect(segmentTree.rangeQuery(0, 1)).toEqual(2);
    expect(segmentTree.rangeQuery(0, 9)).toEqual(-6);
    expect(segmentTree.rangeQuery(1, 3)).toEqual(-2);
    expect(segmentTree.rangeQuery(1, 6)).toEqual(-3);
    expect(segmentTree.rangeQuery(4, 2)).toEqual(-3);
    expect(segmentTree.rangeQuery(6, 7)).toEqual(1);
    expect(segmentTree.rangeQuery(5, 9)).toEqual(-6);
  });

  it('should find max in range', () => {
    const arr = [10, 2, 5, -2, -3, 10, 1, 8, -6, 4];
    const segmentTree = createTree(arr, {
      operation: Math.max,
      fallback: -Infinity,
    });
    expect(segmentTree.rangeQuery(0, 0)).toEqual(10);
    expect(segmentTree.rangeQuery(0, 1)).toEqual(10);
    expect(segmentTree.rangeQuery(0, 9)).toEqual(10);
    expect(segmentTree.rangeQuery(1, 3)).toEqual(5);
    expect(segmentTree.rangeQuery(1, 6)).toEqual(10);
    expect(segmentTree.rangeQuery(4, 2)).toEqual(5);
    expect(segmentTree.rangeQuery(6, 7)).toEqual(8);
    expect(segmentTree.rangeQuery(5, 9)).toEqual(10);
  });
});
