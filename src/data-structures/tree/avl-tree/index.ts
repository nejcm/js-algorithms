/* eslint-disable no-lonely-if */
/* eslint-disable complexity */
import createTree, {Node, Tree} from '../tree';

export interface AvlTree<T> extends Tree<T> {
  _insertNode(this: AvlTree<T>, node: Node<T> | null, value: T): Node<T> | null;
  insert(this: AvlTree<T>, value: T): AvlTree<T>;
  _removeNode(this: AvlTree<T>, node: Node<T> | null, value: T): Node<T> | null;
  remove(this: AvlTree<T>, value: T): AvlTree<T>;
  get(this: AvlTree<T>, value: T): Node<T> | undefined;
  has(this: AvlTree<T>, value: T): boolean;
  findMin(this: AvlTree<T>): T | undefined;
}

const avlTree = <T>(): AvlTree<T> => {
  const treeObj = createTree<T>() as AvlTree<T>;

  // get node height
  const height = (node: Node<T> | null): number =>
    (node?.height || 0) as number;

  // find minimum node in tree
  const minValueNode = (node: Node<T>): Node<T> => {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  };

  // get balance factor
  const getBalance = (node: Node<T>): number => {
    return height(node.left) - height(node.right);
  };

  // rotate right
  const rotateRight = (node: Node<T>): Node<T> => {
    const x = node.left as Node<T>;
    // rotation
    node.left = x.right as Node<T>;
    x.right = node;

    // update heights
    node.height = Math.max(height(node.left), height(node.right)) + 1;
    x.height = Math.max(height(x.left), height(x.right)) + 1;
    return x;
  };

  // rotate left
  const rotateLeft = (node: Node<T>): Node<T> => {
    const x = node.right as Node<T>;
    // rotation
    node.right = x.left as Node<T>;
    x.left = node;

    // update heights
    node.height = Math.max(height(node.left), height(node.right)) + 1;
    x.height = Math.max(height(x.left), height(x.right)) + 1;
    return x;
  };

  treeObj._insertNode = function _insertNode(root, value) {
    // add note if not exists
    if (root === null) {
      this.size++;
      return this.createNode(value, {}, {height: 1});
    }

    // move into left subtree
    if (value < root.value) {
      root.left = this._insertNode(root.left, value);
    }
    // move into right subtree
    else if (value > root.value) {
      root.right = this._insertNode(root.right, value);
    }
    // already exists
    else {
      return root;
    }

    // get max height from children
    root.height = Math.max(height(root.left), height(root.right)) + 1;
    // get node balance factor
    const balance = getBalance(root);
    // left left case
    if (balance > 1 && root.left && root.left.value > value) {
      return rotateRight(root);
    }
    // right right case
    if (balance < -1 && root.right && value > root.right.value) {
      return rotateLeft(root);
    }
    // left right case
    if (balance > 1 && root.left && value > root.left.value) {
      root.left = rotateLeft(root.left);
      return rotateRight(root);
    }
    // right left case
    if (balance < -1 && root.right && value < root.right.value) {
      root.right = rotateRight(root.right);
      return rotateLeft(root);
    }
    // return unchanged
    return root;
  };

  treeObj.insert = function insert(value) {
    this.root = this._insertNode(this.root, value);
    return this;
  };

  treeObj._removeNode = function _removeNode(root, value) {
    if (root === null) {
      return root;
    }

    // move into left subtree
    if (value < root.value) {
      root.left = this._removeNode(root.left, value);
    }
    // move into right subtree
    else if (value > root.value) {
      root.right = this._removeNode(root.right, value);
    }
    // value found
    else {
      // root is the node to be deleted
      if (!root.left && !root.right) {
        root = null;
      } else if (!root.left && root.right) {
        root = root.right;
      } else if (root.left && !root.right) {
        root = root.left;
      } else {
        // node with two children: get the inorder
        // successor (smallest in the right subtree)
        const node = minValueNode(root.right as Node<T>);
        root.value = node.value;
        root.right = this._removeNode(root.right, node.value);
      }
    }

    // if only one node in subtree
    if (root === null) {
      return root;
    }

    // recalc height
    root.height = Math.max(height(root.left), height(root.right)) + 1;
    // get node balance factor
    const balance = getBalance(root);

    // left left case
    if (balance > 1 && root.left && getBalance(root.left) >= 0) {
      return rotateRight(root);
    }

    // left right case
    if (balance > 1 && root.left && getBalance(root.left) < 0) {
      root.left = rotateLeft(root.left);
      return rotateRight(root);
    }

    // right right case
    if (balance < -1 && root.right && getBalance(root.right) <= 0)
      return rotateLeft(root);

    // right left case
    if (balance < -1 && root.right && getBalance(root.right) > 0) {
      root.right = rotateRight(root.right);
      return rotateLeft(root);
    }
    return root;
  };

  treeObj.remove = function remove(value) {
    this.root = this._removeNode(this.root, value);
    return this;
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

export default avlTree;
