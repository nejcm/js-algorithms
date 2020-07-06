import createTree from '../../../data-structures/tree/binary-search-tree';
import isPerfectTree from './';

describe('isPerfectTree', () => {
  it('should return true for empty binary tree', () => {
    const tree = createTree();
    expect(isPerfectTree(tree)).toBeTruthy();
  });

  it('should return true if perfect binary tree', () => {
    const tree = createTree();

    tree.insert(10);
    expect(isPerfectTree(tree)).toBeTruthy();

    tree.insert(5);
    expect(isPerfectTree(tree)).toBeFalsy();

    tree.insert(20);
    expect(isPerfectTree(tree)).toBeTruthy();

    tree.insert(8);
    expect(isPerfectTree(tree)).toBeFalsy();

    tree.insert(4);
    expect(isPerfectTree(tree)).toBeFalsy();

    tree.insert(25);
    tree.insert(15);
    expect(isPerfectTree(tree)).toBeTruthy();

    tree.insert(16);
    expect(isPerfectTree(tree)).toBeFalsy();
  });
});
