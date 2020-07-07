import createTree, {BinaryTree, Key, Node} from '../binaryTree';

export interface BinarySearchTree<T> extends BinaryTree<T> {
  insert(this: BinarySearchTree<T>, key: Key, value?: T): Node<T> | undefined;
  remove(this: BinarySearchTree<T>, key: Key): boolean;
  get(this: BinarySearchTree<T>, key: Key): Node<T> | undefined;
  has(this: BinarySearchTree<T>, key: Key): boolean;
  findMin(this: BinarySearchTree<T>): Key | undefined;
}

const tree = <T>(): BinarySearchTree<T> => {
  const treeObj = createTree<T>() as BinarySearchTree<T>;

  treeObj.insert = function insert(key, value) {
    return this._insert(key, value);
  };

  treeObj.remove = function remove(key) {
    return !!this._remove(key);
  };

  treeObj.get = function get(key) {
    return this._get(key);
  };

  treeObj.has = function has(key) {
    return this._has(key);
  };

  treeObj.findMin = function findMin() {
    return this._findMin()?.key;
  };

  return treeObj;
};

export default tree;
