import createDisjointSet from './';

describe('DisjointSet', () => {
  it('should create disjoint set', () => {
    const disjointSet = createDisjointSet();
    expect(disjointSet).toBeDefined();
    expect(disjointSet.items).toEqual({});
  });

  it('should add and find items in set', () => {
    const disjointSet = createDisjointSet();

    expect(disjointSet.find('a')).toBeUndefined();
    expect(disjointSet.find('b')).toBeUndefined();

    disjointSet.add('a');

    expect(disjointSet.find('a')).toEqual('a');
    expect(disjointSet.find('b')).toBeUndefined();

    disjointSet.add(1, 'b', {key: 'c', value: 'test'});

    expect(disjointSet.find(1)).toEqual(1);
    expect(disjointSet.find('b')).toEqual('b');
    expect(disjointSet.find('c')).toEqual('c');
    expect(disjointSet.items.c?.value).toEqual('test');
  });

  it('should make union from set', () => {
    const disjointSet = createDisjointSet();

    expect(() => disjointSet.union(1, 2)).toThrowError();

    disjointSet.add(1, 2, 3, 4);

    expect(disjointSet.isSameSet(1, 2)).toBeFalsy();
    expect(disjointSet.isSameSet(2, 1)).toBeFalsy();
    expect(disjointSet.items[1].rank).toEqual(1);

    disjointSet.union(1, 2);

    expect(disjointSet.items[1].rank).toEqual(2);

    disjointSet.union(2, 2);

    expect(disjointSet.isSameSet(1, 2)).toBeTruthy();
    expect(disjointSet.isSameSet(2, 1)).toBeTruthy();
    expect(disjointSet.items[1].rank).toEqual(2);
    expect(disjointSet.find(1)).toEqual(1);
    expect(disjointSet.find(2)).toEqual(1);

    disjointSet.union(3, 2);

    expect(disjointSet.isSameSet(3, 2)).toBeTruthy();
    expect(disjointSet.isSameSet(1, 3)).toBeTruthy();
    expect(disjointSet.isSameSet(1, 4)).toBeFalsy();
    expect(disjointSet.items[1].rank).toEqual(3);
    expect(disjointSet.find(1)).toEqual(1);
    expect(disjointSet.find(2)).toEqual(1);
    expect(disjointSet.find(3)).toEqual(1);
  });

  it('should union smaller set to bigger root', () => {
    const disjointSet = createDisjointSet();

    disjointSet.add('A', 'B', 'C');
    disjointSet.union('B', 'C').union('A', 'C');

    expect(disjointSet.find('A')).toEqual('B');
  });

  it('should do collapsing find', () => {
    const disjointSet = createDisjointSet();

    disjointSet.add(1, 2, 3, 4, 5, 6);
    disjointSet.union(2, 3).union(4, 5).union(2, 5);

    expect(disjointSet.items[2].rank).toEqual(4);
    expect(disjointSet.items[5].parent?.key).toEqual(4);
    expect(disjointSet.find(5)).toEqual(2);
    expect(disjointSet.items[5].parent?.key).toEqual(2);
  });
});
