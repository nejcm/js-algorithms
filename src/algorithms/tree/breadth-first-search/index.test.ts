import createBST from '../../../data-structures/tree/binary-search-tree';
import {Key} from '../../../data-structures/tree/binaryTree';
import bfs from './';

describe('BreathFirstSearchTree', () => {
  it('should search tree', () => {
    const tree = createBST();

    const callbackStub = jest.fn(() => true);
    bfs(tree.root, callbackStub);
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
    bfs(tree.root, customCallbackStub);
    expect(visited).toEqual(['C', 'B', 'D', 'A', 'G', 'F', 'E']);
    expect(customCallbackStub).toBeCalledTimes(7);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return node.key !== 'G';
    });
    bfs(tree.root, customCallbackStub);
    expect(visited).toEqual(['C', 'B', 'D', 'A', 'G']);
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
    bfs(tree.root?.right?.right?.right, callbackStub);
    expect(callbackStub).not.toBeCalled();

    callbackStub = jest.fn(() => true);
    bfs(tree.root?.right?.right, callbackStub);
    expect(callbackStub).toBeCalledTimes(1);

    let visited: Key[] = [];
    let customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return true;
    });
    bfs(tree.root, customCallbackStub);
    expect(visited).toEqual([10, 5, 20, 3, 6, 15, 25, 1, 4, 8, 12, 0, 2]);
    expect(customCallbackStub).toBeCalledTimes(13);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return true;
    });
    bfs(tree.root?.right, customCallbackStub);
    expect(visited).toEqual([20, 15, 25, 12]);
    expect(customCallbackStub).toBeCalledTimes(4);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return node.key !== 0;
    });
    bfs(tree.root?.left?.left, customCallbackStub);
    expect(visited).toEqual([3, 1, 4, 0]);
    expect(customCallbackStub).toBeCalledTimes(4);

    visited = [];
    customCallbackStub = jest.fn((node) => {
      visited.push(node.key);
      return node.key !== 6;
    });
    bfs(tree.root?.left, customCallbackStub);
    expect(visited).toEqual([5, 3, 6]);
    expect(customCallbackStub).toBeCalledTimes(3);
  });
});
