import createTree from '../../../data-structures/tree/binary-search-tree';
import isBalancedTree from './';

describe('isBalancedTree', () => {
  it('should return true for empty binary tree', () => {
    const tree = createTree();
    expect(isBalancedTree(tree)).toBeTruthy();
  });

  it('should return true if balanced binary tree', () => {
    const tree = createTree();

    tree.insert(10);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(5);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(20);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(8);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(4);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(1);
    expect(isBalancedTree(tree)).toBeFalsy();

    tree.insert(15);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(25);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(16);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(26);
    expect(isBalancedTree(tree)).toBeTruthy();

    tree.insert(27);
    expect(isBalancedTree(tree)).toBeFalsy();
  });
});
