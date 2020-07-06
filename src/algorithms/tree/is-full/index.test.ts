import createTree from '../../../data-structures/tree/binary-search-tree';
import isFullTree from './';

describe('isFullTree', () => {
  it('should return true for empty binary tree', () => {
    const tree = createTree();
    expect(isFullTree(tree)).toBeTruthy();
  });

  it('should return true if full binary tree', () => {
    const tree = createTree();

    tree.insert(10);
    expect(isFullTree(tree)).toBeTruthy();

    tree.insert(5);
    expect(isFullTree(tree)).toBeFalsy();

    tree.insert(20);
    expect(isFullTree(tree)).toBeTruthy();

    tree.insert(8);
    expect(isFullTree(tree)).toBeFalsy();

    tree.insert(4);
    expect(isFullTree(tree)).toBeTruthy();

    tree.insert(25);
    tree.insert(15);
    expect(isFullTree(tree)).toBeTruthy();

    tree.insert(16);
    expect(isFullTree(tree)).toBeFalsy();
  });
});
