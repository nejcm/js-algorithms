import createTree from './';

describe('AVLTree', () => {
  it('should create empty tree', () => {
    const tree = createTree();
    expect(tree).toBeDefined();
    expect(tree.root).toBeNull();
  });

  it('should insert values', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(5);
    tree.insert(2);

    expect(tree.toString()).toEqual('1 -> 2 -> 5');
    expect(tree.toArray()).toEqual([1, 2, 5]);
    expect(tree.root?.value).toEqual(1);
  });

  it('should check if value exists', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(5);

    expect(tree.has(1)).toBeTruthy();
    expect(tree.has(2)).toBeTruthy();
    expect(tree.has(5)).toBeTruthy();
    expect(tree.has(3)).toBeFalsy();
  });

  it('should remove nodes', () => {
    const tree = createTree();

    expect(tree.remove(0)).toEqual(false);
    expect(tree.root).toEqual(null);

    tree.insert(3);
    tree.insert(1);
    tree.insert(5);
    tree.insert(13);
    tree.insert(-1);
    tree.insert(8);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(-3);
    tree.insert(-6);
    tree.insert(10);

    tree.remove(5);
    expect(tree.toArray()).toEqual([-6, -3, -1, 1, 2, 3, 4, 7, 8, 10, 13]);

    tree.remove(6);
    expect(tree.toArray()).toEqual([-6, -3, -1, 1, 2, 3, 4, 7, 8, 10, 13]);
    expect(tree.root?.value).toEqual(3);

    tree.remove(-1);
    expect(tree.toArray()).toEqual([-6, -3, 1, 2, 3, 4, 7, 8, 10, 13]);

    tree.remove(7);
    expect(tree.toArray()).toEqual([-6, -3, 1, 2, 3, 4, 8, 10, 13]);

    tree.remove(1);
    tree.remove(3);
    tree.remove(-3);
    tree.remove(13);
    tree.remove(8);
    tree.remove(4);
    tree.remove(2);
    tree.remove(2);
    tree.remove(-6);
    tree.remove(10);
    expect(tree.toArray()).toEqual([]);
    expect(tree.root).toBeNull();
  });

  it('should iterate tree nodes', () => {
    const tree = createTree();

    tree.insert(5);
    tree.insert(-10);
    tree.insert(1);
    tree.insert(-2);

    expect(tree.toArray()).toEqual([-10, -2, 1, 5]);
    const generator = tree.iterate();

    expect(generator.next().value).toEqual(-10);
    expect(generator.next().value).toEqual(-2);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(5);
    expect(generator.next()).toMatchObject({done: true, value: undefined});
  });

  it('should find minimum', () => {
    const tree = createTree();

    expect(tree.findMin()).toBeUndefined();
    tree.insert(5);
    tree.insert(-10);
    tree.insert(1);
    tree.insert(-2);

    expect(tree.findMin()).toEqual(-10);
    tree.insert(-11);
    expect(tree.findMin()).toEqual(-11);
  });
});
