import createTree, {BinaryTree, Key, Node} from '../binaryTree';

export interface RedBlackTree<T> extends BinaryTree<T> {
  _insertNode(
    this: RedBlackTree<T>,
    node: Node<T> | null,
    key: Key,
    value?: T,
  ): Node<T> | null;
  insert(this: RedBlackTree<T>, key: Key, value?: T): RedBlackTree<T>;
  _removeNode(
    this: RedBlackTree<T>,
    node: Node<T> | null,
    key: Key,
  ): Node<T> | null;
  remove(this: RedBlackTree<T>, key: Key): RedBlackTree<T>;
  get(this: RedBlackTree<T>, key: Key): Node<T> | undefined;
  has(this: RedBlackTree<T>, key: Key): boolean;
  findMin(this: RedBlackTree<T>): Key | undefined;
  isRed(this: RedBlackTree<T>, node: Node<T> | null): boolean;
  isBlack(this: RedBlackTree<T>, node: Node<T> | null): boolean;
}

const redBlackTree = <T>(): RedBlackTree<T> => {
  const tree = createTree<T>() as RedBlackTree<T>;

  // rotate right
  const rotateRight = (node: Node<T>): Node<T> => {
    const x = node.left as Node<T>;
    // rotation
    node.left = x.right as Node<T>;
    x.right = node;

    // update colors
    x.isBlack = x.right.isBlack;
    x.right.isBlack = false;
    return x;
  };

  // rotate left
  const rotateLeft = (node: Node<T>): Node<T> => {
    const x = node.right as Node<T>;
    // rotation
    node.right = x.left as Node<T>;
    x.left = node;

    // update colors
    x.isBlack = x.left.isBlack;
    x.left.isBlack = false;
    return x;
  };

  const isRed = (node: Node<T> | null | undefined): boolean => {
    if (!node) return false;
    return !node.isBlack;
  };

  const isBlack = (node: Node<T> | null | undefined): boolean => {
    if (!node) return false;
    return !!node.isBlack;
  };

  // flip child colors
  const flipColors = (node: Node<T>): Node<T> => {
    node.isBlack = !node.isBlack;
    if (node.left) node.left.isBlack = !node.left.isBlack;
    if (node.right) node.right.isBlack = !node.right.isBlack;
    return node;
  };

  // if node is red and both left and left.left
  // are black, make left or one of its children red
  const moveRedLeft = (node: Node<T>): Node<T> => {
    node = flipColors(node);
    if (isRed(node.right?.left)) {
      node.right = rotateRight(node.right as Node<T>);
      node = rotateLeft(node);
      node = flipColors(node);
    }
    return node;
  };

  // if node is red and both right and right.left
  // are black, make right or one of its children red
  const moveRedRight = (node: Node<T>): Node<T> => {
    node = flipColors(node);
    if (isRed(node.left?.left)) {
      node = rotateRight(node);
      node = flipColors(node);
    }
    return node;
  };

  // restore red-black tree
  const balance = (node: Node<T>): Node<T> => {
    if (isRed(node.right)) node = rotateLeft(node);
    if (isRed(node.left) && isRed(node.left?.left)) node = rotateRight(node);
    if (isRed(node.left) && isRed(node.right)) node = flipColors(node);
    return node;
  };

  // find minimum node in tree
  const minValueNode = (node: Node<T>): Node<T> => {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  };

  // delete min node in subtree
  const deleteMinNode = (node: Node<T> | null): Node<T> | null => {
    if (!node?.left) return null;
    if (!isRed(node.left) && !isRed(node.left.left)) node = moveRedLeft(node);

    node.left = deleteMinNode(node.left);
    return balance(node);
  };

  // insert new node
  tree._insertNode = function _insertNode(root, key, value) {
    if (root === null) {
      this.size++;
      return this.createNode(key, value, {isBlack: false});
    }

    if (root.key > key) {
      root.left = this._insertNode(root.left, key, value);
    } else if (root.key < key) {
      root.right = this._insertNode(root.right, key, value);
    } else {
      // element already exists
      // update value
      root.value = value;
      return root;
    }

    if (isRed(root.right) && !isRed(root.left)) {
      root = rotateLeft(root);
    }
    if (isRed(root.left) && isRed(root.left?.left)) {
      root = rotateRight(root);
    }
    if (isRed(root.left) && isRed(root.right)) {
      root = flipColors(root);
    }
    return root;
  };

  // insert new node
  tree.insert = function insert(key, value) {
    this.root = this._insertNode(this.root, key, value);
    if (this.root) this.root.isBlack = true;
    return this;
  };

  // remove node
  tree._removeNode = function _removeNode(root, key) {
    if (root === null) return root;

    // move into left subtree
    if (key < root.key) {
      if (!root.left || (!isRed(root.left) && !isRed(root.left.left))) {
        root = moveRedLeft(root);
      }
      root.left = this._removeNode(root.left, key);
    } else {
      if (isRed(root.left)) {
        root = rotateRight(root);
      }
      if (key === root.key && root.right === null) {
        return null;
      }
      if (!root.right || (!isRed(root.right) && !isRed(root.right.left))) {
        root = moveRedRight(root);
      }
      if (key === root.key) {
        const node = minValueNode(root.right as Node<T>);
        root.key = node.key;
        root.value = node.value;
        root.right = deleteMinNode(root.right);
      } else {
        root.right = this._removeNode(root.right, key);
      }
    }
    return balance(root);
  };

  // remove node
  tree.remove = function remove(key) {
    if (!this.root) return this;
    if (!this.has(key)) return this;
    // if both children of root are black, set it to red
    if (!isRed(this.root.left) && !isRed(this.root.right)) {
      this.root.isBlack = false;
    }
    this.root = this._removeNode(this.root, key);
    if (this.root) this.root.isBlack = true;
    return this;
  };

  tree.isRed = isRed;
  tree.isBlack = isBlack;

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

export default redBlackTree;
