import createTree from './';

describe('FenWickTree', () => {
  it('should create empty tree', () => {
    const tree = createTree();
    expect(tree).toBeDefined();
    expect(tree.size).toBeGreaterThan(0);

    const tree30 = createTree({size: 30});
    expect(tree30).toBeDefined();
    expect(tree30.size).toEqual(30);
    expect(tree30.nodes.length).toEqual(30 + 1);
  });

  it('should create correct tree and query values', () => {
    const inputArray = [5, 1, -1, 6, 2, -8, -3, 5, 9, 9, -5, 4];
    const tree = createTree({size: inputArray.length});

    inputArray.forEach((value, index) => {
      tree.increase(index + 1, value);
    });

    expect(tree.nodes).toEqual([0, 5, 6, -1, 11, 2, -6, -3, 7, 9, 18, -5, 17]);

    expect(tree.query(1)).toEqual(5);
    expect(tree.query(2)).toEqual(6);
    expect(tree.query(3)).toEqual(5);
    expect(tree.query(4)).toEqual(11);
    expect(tree.query(5)).toEqual(13);
    expect(tree.query(6)).toEqual(5);
    expect(tree.query(7)).toEqual(2);
    expect(tree.query(8)).toEqual(7);
    expect(tree.query(9)).toEqual(16);
    expect(tree.query(10)).toEqual(25);
    expect(tree.query(11)).toEqual(20);

    expect(tree.queryRange(1, 1)).toEqual(5);
    expect(tree.queryRange(1, 2)).toEqual(6);
    expect(tree.queryRange(2, 5)).toEqual(8);
    expect(tree.queryRange(3, 9)).toEqual(10);

    tree.increase(5, 1);

    expect(tree.query(1)).toEqual(5);
    expect(tree.query(2)).toEqual(6);
    expect(tree.query(3)).toEqual(5);
    expect(tree.query(4)).toEqual(11);
    expect(tree.query(5)).toEqual(14);
    expect(tree.query(6)).toEqual(6);
    expect(tree.query(7)).toEqual(3);
    expect(tree.query(8)).toEqual(8);
    expect(tree.query(9)).toEqual(17);
    expect(tree.query(10)).toEqual(26);
    expect(tree.query(11)).toEqual(21);

    expect(tree.queryRange(1, 1)).toEqual(5);
    expect(tree.queryRange(1, 2)).toEqual(6);
    expect(tree.queryRange(2, 5)).toEqual(9);
    expect(tree.queryRange(3, 9)).toEqual(11);

    expect(() => tree.queryRange(5, 4)).toThrowError();
    expect(() => tree.query(-1)).toThrowError();
    expect(() => tree.query(15)).toThrowError();
    expect(() => tree.increase(-1, 1)).toThrowError();
  });
});
