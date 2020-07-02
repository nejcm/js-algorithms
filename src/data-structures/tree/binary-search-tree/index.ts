import createTree, {Node, Tree} from '../tree';

export interface BinarySearchTree<T> extends Tree<T> {
  insert(this: BinarySearchTree<T>, value: T): Node<T> | undefined;
  remove(this: BinarySearchTree<T>, value: T): boolean;
  get(this: BinarySearchTree<T>, value: T): Node<T> | undefined;
  has(this: BinarySearchTree<T>, value: T): boolean;
  findMin(this: BinarySearchTree<T>): T | undefined;
}

const tree = <T>(): BinarySearchTree<T> => {
  const treeObj = createTree<T>() as BinarySearchTree<T>;

  treeObj.insert = function insert(value) {
    return this._insert(value);
  };

  treeObj.remove = function remove(value) {
    return !!this._remove(value);
  };

  treeObj.get = function get(value) {
    return this._get(value);
  };

  treeObj.has = function has(value) {
    return this._has(value);
  };

  treeObj.findMin = function findMin() {
    return this._findMin()?.value;
  };

  return treeObj;
};

export default tree;
