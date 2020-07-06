import validateRedBlackTree from '../../../algorithms/tree/is-valid-red-black';
import createTree from './index';

describe('RedBlackTree', () => {
  it('should create empty tree', () => {
    const tree = createTree();
    expect(tree).toBeDefined();
    expect(tree.root).toBeNull();
  });

  it('should insert nodes', () => {
    const tree = createTree();

    tree.insert('A');

    expect(tree.root?.isBlack).toBeTruthy();
    expect(tree.get('A')?.isBlack).toBeTruthy();
    expect(tree.toString()).toEqual('A');
    expect(tree.size).toEqual(1);
  });

  it('should color new leaf red', () => {
    const tree = createTree();

    tree.insert(2);
    tree.insert(3);
    tree.insert(1);

    expect(tree.isBlack(tree.root)).toBeTruthy();
    expect(tree.root?.key).toEqual(2);
    expect(tree.isRed(tree.root?.left || null)).toBeFalsy();
    expect(tree.root?.right?.isBlack).toBeTruthy();
    expect(tree.toArray()).toEqual([1, 2, 3]);
    expect(tree.size).toEqual(3);
  });

  it('should balance tree correctly when inserting #1', () => {
    const tree = createTree();

    tree.insert(5);
    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(25);
    tree.insert(30);

    expect(validateRedBlackTree(tree)).toBeTruthy();
  });

  it('should balance tree correctly when inserting #2', () => {
    const tree = createTree();

    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(50);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(40);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(40);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(30);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(35);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(20);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(10);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(0);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(15);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(5);
    expect(validateRedBlackTree(tree)).toBeTruthy();
  });

  it('should balance tree correctly when deleting #1', () => {
    const tree = createTree();

    tree.remove(0);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(0).insert(-5).insert(1).insert(4);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(1);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(4);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(1);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(12).insert(-3).insert(-1).insert(9);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(0);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(-1);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(1);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(-5);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(-3);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(12);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(9);
    expect(validateRedBlackTree(tree)).toBeTruthy();
  });

  it('should balance tree correctly when deleting #2', () => {
    const tree = createTree();

    tree
      .insert(0)
      .insert(-5)
      .insert(1)
      .insert(4)
      .insert(-10)
      .insert(10)
      .insert(12)
      .insert(4)
      .insert(8)
      .insert(7)
      .insert(20)
      .insert(-2)
      .insert(2)
      .insert(28)
      .insert(21)
      .insert(21)
      .insert(17)
      .insert(-25)
      .insert(-99)
      .insert(99)
      .insert(13)
      .insert(-15)
      .insert(-9)
      .insert(3)
      .insert(18)
      .insert(30)
      .insert(-14);

    tree.remove(-2);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(30);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(-9);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(8);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(7);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(-14);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(4);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(10);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(-15);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(0);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(-5);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(11);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(3);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(1);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(12);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(20);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(2);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(2);
    expect(validateRedBlackTree(tree)).toBeTruthy();
    tree.remove(18);
    expect(validateRedBlackTree(tree)).toBeTruthy();
  });

  it('should balance tree correctly when deleting #3', () => {
    const tree = createTree();

    tree.insert(100);
    tree.insert(90);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(100);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(80);
    tree.insert(75);
    tree.insert(55);
    tree.insert(45);
    tree.insert(50);
    tree.insert(35);
    tree.insert(30);
    tree.insert(20);
    tree.insert(25);

    tree.remove(30);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(20);
    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.insert(60);
    tree.insert(120);
    tree.insert(110);

    expect(validateRedBlackTree(tree)).toBeTruthy();

    tree.remove(80).remove(55).remove(60).remove(120).remove(110).remove(90);
    expect(validateRedBlackTree(tree)).toBeTruthy();
  });

  it('should check node if of color', () => {
    const tree = createTree();

    expect(tree.isBlack(tree.root)).toBeFalsy();
    expect(tree.isRed(tree.root)).toBeFalsy();

    tree.insert(1);
    tree.insert(2);

    expect(tree.isBlack(tree.root)).toBeTruthy();
    expect(tree.isRed(tree.root)).toBeFalsy();
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
