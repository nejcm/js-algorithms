import createBST from '../../../data-structures/tree/binary-search-tree';
import {Key} from '../../../data-structures/tree/binaryTree';
import dfs from './';

describe('DepthFirstSearchTree', () => {
  it('should search tree', () => {
    const tree = createBST();

    const callbackStub = jest.fn(() => true);
    dfs(tree.root, callbackStub);
    expect(callbackStub).not.toBeCalled();

    tree.insert('C');
    tree.insert('B');
    tree.insert('D');
    tree.insert('A');
    tree.insert('G');
    tree.insert('F');
    tree.insert('E');

    let visited: Key[] = [];
    let customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return true;
    });
    dfs(tree.root, customCallbackStub);
    expect(visited).toEqual(['C', 'B', 'A', 'D', 'G', 'F', 'E']);
    expect(customCallbackStub).toBeCalledTimes(7);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return node.key !== 'G';
    });
    dfs(tree.root, customCallbackStub);
    expect(visited).toEqual(['C', 'B', 'A', 'D', 'G']);
    expect(customCallbackStub).toBeCalledTimes(5);
  });

  it('should search subtree', () => {
    const tree = createBST();

    tree.insert(10);

    tree.insert(5);
    tree.insert(3);
    tree.insert(6);
    tree.insert(8);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    tree.insert(2);

    tree.insert(20);
    tree.insert(15);
    tree.insert(25);
    tree.insert(12);

    let callbackStub = jest.fn(() => true);
    dfs(tree.root?.right?.right?.right, callbackStub);
    expect(callbackStub).not.toBeCalled();

    callbackStub = jest.fn(() => true);
    dfs(tree.root?.right?.right, callbackStub);
    expect(callbackStub).toBeCalledTimes(1);

    let visited: Key[] = [];
    let customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return true;
    });
    dfs(tree.root, customCallbackStub);
    expect(visited).toEqual([10, 5, 3, 1, 0, 2, 4, 6, 8, 20, 15, 12, 25]);
    expect(customCallbackStub).toBeCalledTimes(13);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return true;
    });
    dfs(tree.root?.right, customCallbackStub);
    expect(visited).toEqual([20, 15, 12, 25]);
    expect(customCallbackStub).toBeCalledTimes(4);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return node.key !== 0;
    });
    dfs(tree.root?.left?.left, customCallbackStub);
    expect(visited).toEqual([3, 1, 0]);
    expect(customCallbackStub).toBeCalledTimes(3);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return node.key !== 6;
    });
    dfs(tree.root?.left, customCallbackStub);
    expect(visited).toEqual([5, 3, 1, 0, 2, 4, 6]);
    expect(customCallbackStub).toBeCalledTimes(7);
  });
});
