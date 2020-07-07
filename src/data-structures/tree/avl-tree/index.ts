/* eslint-disable no-lonely-if */
/* eslint-disable complexity */
import createTree, {BinaryTree, Key, Node} from '../binaryTree';

export interface AvlTree<T> extends BinaryTree<T> {
  _insertNode(
    this: AvlTree<T>,
    node: Node<T> | null,
    key: Key,
    value?: T,
  ): Node<T> | null;
  insert(this: AvlTree<T>, key: Key, value?: T): AvlTree<T>;
  _removeNode(this: AvlTree<T>, node: Node<T> | null, key: Key): Node<T> | null;
  remove(this: AvlTree<T>, key: Key): AvlTree<T>;
  get(this: AvlTree<T>, key: Key): Node<T> | undefined;
  has(this: AvlTree<T>, key: Key): boolean;
  findMin(this: AvlTree<T>): Key | undefined;
}

const avlTree = <T>(): AvlTree<T> => {
  const tree = createTree<T>() as AvlTree<T>;

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

  tree._insertNode = function _insertNode(root, key, value) {
    // add note if not exists
    if (root === null) {
      this.size++;
      return this.createNode(key, value, {height: 1});
    }

    // move into left subtree
    if (key < root.key) {
      root.left = this._insertNode(root.left, key, value);
    }
    // move into right subtree
    else if (key > root.key) {
      root.right = this._insertNode(root.right, key, value);
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
    if (balance > 1 && root.left && root.left.key > key) {
      return rotateRight(root);
    }
    // right right case
    if (balance < -1 && root.right && key > root.right.key) {
      return rotateLeft(root);
    }
    // left right case
    if (balance > 1 && root.left && key > root.left.key) {
      root.left = rotateLeft(root.left);
      return rotateRight(root);
    }
    // right left case
    if (balance < -1 && root.right && key < root.right.key) {
      root.right = rotateRight(root.right);
      return rotateLeft(root);
    }
    // return unchanged
    return root;
  };

  tree.insert = function insert(key, value) {
    this.root = this._insertNode(this.root, key, value);
    return this;
  };

  tree._removeNode = function _removeNode(root, key) {
    if (root === null) {
      return root;
    }

    // move into left subtree
    if (key < root.key) {
      root.left = this._removeNode(root.left, key);
    }
    // move into right subtree
    else if (key > root.key) {
      root.right = this._removeNode(root.right, key);
    }
    // key found
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
        root.key = node.key;
        root.value = node.value;
        root.right = this._removeNode(root.right, node.key);
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

  tree.remove = function remove(key) {
    this.root = this._removeNode(this.root, key);
    return this;
  };

  tree.get = function get(key) {
    return this._get(key);
  };

  tree.has = function has(key) {
    return this._has(key);
  };

  tree.findMin = function findMin() {
    return this._findMin()?.key;
  };

  return tree;
};

export default avlTree;
