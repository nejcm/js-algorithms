import createTree from './index';

describe('AVLTree', () => {
  it('should create empty tree', () => {
    const tree = createTree();
    expect(tree).toBeDefined();
    expect(tree.root).toBeNull();
  });

  it('should do left-left rotation', () => {
    const tree = createTree();

    tree.insert(6);
    tree.insert(4);
    tree.insert(2);

    expect(tree.toArray()).toEqual([2, 4, 6]);
    expect(tree.root?.key).toEqual(4);
    expect(tree.root?.height).toEqual(2);

    tree.insert(8);

    expect(tree.toArray()).toEqual([2, 4, 6, 8]);
    expect(tree.root?.key).toEqual(4);
    expect(tree.root?.height).toEqual(3);

    tree.insert(0);

    expect(tree.toArray()).toEqual([0, 2, 4, 6, 8]);
    expect(tree.root?.key).toEqual(4);
    expect(tree.root?.left?.key).toEqual(2);
    expect(tree.root?.left?.height).toEqual(2);
    expect(tree.root?.right?.height).toEqual(2);
    expect(tree.root?.height).toEqual(3);

    tree.insert(0);

    expect(tree.toArray()).toEqual([0, 2, 4, 6, 8]);
  });

  it('should do complex left-left rotation', () => {
    const tree = createTree();

    tree.insert(15);
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);

    expect(tree.root?.key).toEqual(15);
    expect(tree.root?.height).toEqual(3);
    expect(tree.toString()).toEqual('5, 10, 15, 20');

    tree.insert(12);
    expect(tree.root?.key).toEqual(15);
    expect(tree.root?.height).toEqual(3);
    expect(tree.toString()).toEqual('5, 10, 12, 15, 20');

    tree.insert(1);
    expect(tree.root?.key).toEqual(10);
    expect(tree.root?.height).toEqual(3);
    expect(tree.toString()).toEqual('1, 5, 10, 12, 15, 20');
  });

  it('should do right-right rotation', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree.toArray()).toEqual([1, 2, 3]);
    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(2);

    tree.insert(4);

    expect(tree.toArray()).toEqual([1, 2, 3, 4]);
    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(3);

    tree.insert(5);

    expect(tree.toArray()).toEqual([1, 2, 3, 4, 5]);
    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.right?.key).toEqual(4);
    expect(tree.root?.height).toEqual(3);
  });

  it('should do complex right-right rotation', () => {
    const tree = createTree();

    tree.insert(15);
    tree.insert(10);
    tree.insert(20);
    tree.insert(25);

    expect(tree.root?.key).toEqual(15);
    expect(tree.root?.height).toEqual(3);
    expect(tree.toArray()).toEqual([10, 15, 20, 25]);

    tree.insert(16);
    expect(tree.root?.key).toEqual(15);
    expect(tree.root?.height).toEqual(3);
    expect(tree.toArray()).toEqual([10, 15, 16, 20, 25]);

    tree.insert(26);
    expect(tree.root?.key).toEqual(20);
    expect(tree.root?.height).toEqual(3);
    expect(tree.toArray()).toEqual([10, 15, 16, 20, 25, 26]);
  });

  it('should do left-right rotation', () => {
    const tree = createTree();

    tree.insert(15);
    tree.insert(10);
    tree.insert(12);
    tree.insert(11);

    expect(tree.root?.height).toEqual(3);
    expect(tree.root?.key).toEqual(12);
    expect(tree.toArray()).toEqual([10, 11, 12, 15]);
  });

  it('should do right-left rotation', () => {
    const tree = createTree();

    tree.insert(15);
    tree.insert(20);
    tree.insert(16);
    tree.insert(18);

    expect(tree.root?.height).toEqual(3);
    expect(tree.root?.key).toEqual(16);
    expect(tree.toArray()).toEqual([15, 16, 18, 20]);
  });

  it('should create balanced tree', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(2);

    tree.insert(6);

    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(3);

    tree.insert(15);

    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(3);

    tree.insert(-2);

    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(3);

    tree.insert(-5);

    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(3);

    tree.insert(-8);

    expect(tree.root?.key).toEqual(2);
    expect(tree.root?.height).toEqual(4);
  });

  it('should remove nodes with right-right rotation', () => {
    const tree = createTree();

    expect(tree.remove(1)).toBeDefined();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);

    expect(tree.toString()).toEqual('1, 2, 3, 4');

    tree.remove(1);

    expect(tree.toString()).toEqual('2, 3, 4');
    expect(tree.root?.key).toEqual(3);
    expect(tree.root?.left?.key).toEqual(2);
    expect(tree.root?.right?.key).toEqual(4);
    expect(tree.root?.height).toEqual(2);
  });

  it('should remove nodes with left-left rotation', () => {
    const tree = createTree();

    tree.remove(0);

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(0);

    expect(tree.toString()).toEqual('0, 1, 2, 3');

    tree.remove(3);

    expect(tree.toString()).toEqual('0, 1, 2');
    expect(tree.root?.key).toEqual(1);
    expect(tree.root?.left?.key).toEqual(0);
    expect(tree.root?.right?.key).toEqual(2);
    expect(tree.root?.height).toEqual(2);
  });

  it('should keep balance after removal', () => {
    const tree = createTree();

    tree
      .insert(1)
      .insert(2)
      .insert(3)
      .insert(4)
      .insert(5)
      .insert(6)
      .insert(7)
      .insert(8)
      .insert(9)
      .insert(15)
      .insert(-5)
      .insert(-2)
      .insert(11)
      .insert(-1)
      .insert(13)
      .insert(20)
      .insert(19)
      .insert(-6)
      .insert(0);

    expect(tree.root?.key).toEqual(4);

    tree.remove(8);

    expect(tree.root?.key).toEqual(4);

    tree.remove(9);

    expect(tree.has(8)).toBeFalsy();
    expect(tree.has(9)).toBeFalsy();
    expect(tree.root?.key).toEqual(4);

    tree.remove(2);
    tree.remove(-5);
    tree.remove(-1);
    tree.remove(11);
    tree.remove(6);
    tree.remove(7);
    tree.remove(3);
    tree.remove(1);
    tree.remove(13);
    tree.remove(-6);
    tree.remove(19);
    tree.remove(0);
    tree.remove(15);
  });

  it('should correctly balance the left right case', () => {
    const tree = createTree();
    tree.insert(6);
    tree.insert(2);
    tree.insert(7);
    tree.insert(1);
    tree.insert(8);
    tree.insert(4);
    tree.insert(3);
    tree.insert(5);

    tree.remove(8);

    expect(tree.root?.key).toEqual(4);
    expect(tree.root?.left?.key).toEqual(2);
    expect(tree.root?.left?.key).toEqual(2);
    expect(tree.root?.left?.left?.key).toEqual(1);
    expect(tree.root?.left?.right?.key).toEqual(3);
    expect(tree.root?.right?.key).toEqual(6);
    expect(tree.root?.right?.left?.key).toEqual(5);
    expect(tree.root?.right?.right?.key).toEqual(7);
  });

  it('should get node', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);

    expect(tree.get(2)?.key).toEqual(2);
    expect(tree.get(3)).toBeUndefined();

    tree.remove(2);

    expect(tree.get(2)).toBeUndefined();
  });

  it('should check if has node', () => {
    const tree = createTree();

    tree.insert(1);
    tree.insert(2);

    expect(tree.has(2)).toBeTruthy();
    expect(tree.has(0)).toBeFalsy();
  });

  it('should get min node key', () => {
    const tree = createTree();

    expect(tree.findMin()).toBeUndefined();

    tree.insert(1);
    tree.insert(3);
    tree.insert(2);

    expect(tree.findMin()).toEqual(1);

    tree.insert(0);

    expect(tree.findMin()).toEqual(0);
  });
});
