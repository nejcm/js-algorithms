import createTree from '../../../data-structures/tree/binary-search-tree';
import isCompleteTree from './';

describe('isCompleteTree', () => {
  it('should return true for empty binary tree', () => {
    const tree = createTree();
    expect(isCompleteTree(tree)).toBeTruthy();
  });

  it('should return true if complete binary tree', () => {
    const tree = createTree();

    tree.insert(10);
    expect(isCompleteTree(tree)).toBeTruthy();

    tree.insert(5);
    expect(isCompleteTree(tree)).toBeTruthy();

    tree.insert(20);
    expect(isCompleteTree(tree)).toBeTruthy();

    tree.insert(8);
    expect(isCompleteTree(tree)).toBeFalsy();

    tree.insert(4);
    expect(isCompleteTree(tree)).toBeTruthy();

    tree.insert(15);
    expect(isCompleteTree(tree)).toBeTruthy();

    tree.insert(25);
    expect(isCompleteTree(tree)).toBeTruthy();

    tree.insert(16);
    expect(isCompleteTree(tree)).toBeFalsy();
  });
});
