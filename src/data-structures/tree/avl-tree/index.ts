import createBinaryTree, {BinarySearchTree, Node} from '../binary-search-tree';

export interface AvlTree<T> extends BinarySearchTree<T> {
  insert(this: AvlTree<T>, value: T): Node<T> | undefined;
  remove(this: AvlTree<T>, value: T): boolean;
  _remove(
    this: AvlTree<T>,
    value: T,
  ): {removed: Node<T>; replacement: Node<T> | null} | undefined;
}

const avlTree = <T>(): AvlTree<T> => {
  const binarySearchTree = createBinaryTree<T>();

  // get node height
  const height = (node: Node<T> | null): number =>
    (node?.meta?.height || 0) as number;

  // get balance factor
  const getBalance = (node: Node<T>): number => {
    if (node == null) return 0;
    return height(node.left) - height(node.right);
  };

  // rotate right
  const rotateRight = (y: Node<T>): Node<T> => {
    const x = y.left as Node<T>;
    const t = x.right as Node<T>;
    // rotation
    x.right = y;
    y.left = t;

    // update heights
    y.meta.heigth = Math.max(height(y.left), height(y.right)) + 1;
    x.meta.height = Math.max(height(x.left), height(x.right)) + 1;
    return x;
  };

  // rotate left
  const rotateLeft = (x: Node<T>): Node<T> => {
    const y = x.right as Node<T>;
    const t = y.left as Node<T>;
    // rotation
    y.left = x;
    x.right = t;

    // update heights
    x.meta.height = Math.max(height(x.left), height(x.right)) + 1;
    y.meta.height = Math.max(height(y.left), height(y.right)) + 1;
    return y;
  };

  const treeObj: AvlTree<T> = {
    ...binarySearchTree,

    // insert value
    insert: function insert(value) {
      const node = binarySearchTree.insert(value);

      if (!node) return undefined;
      node.meta.height = 1 + Math.max(height(node.left), height(node.right));
      // get node balance factor
      const balance = getBalance(node);
      // left left case
      if (balance > 1 && node.left && node.left.value > value) {
        return rotateRight(node);
      }
      // right right case
      if (balance < -1 && node.right && value > node.right.value) {
        return rotateLeft(node);
      }
      // left right case
      if (balance > 1 && node.left && value > node.left.value) {
        node.left = rotateLeft(node.left);
        return rotateRight(node);
      }
      // right left case
      if (balance < -1 && node.right && value < node.right.value) {
        node.right = rotateRight(node.right);
        return rotateLeft(node);
      }

      // return unchanged
      return node;
    },

    // delete node
    _remove: function _remove(value) {
      const deleted = binarySearchTree._remove(value);
      if (!deleted) return undefined;

      const root = deleted.replacement || (this.root as Node<T>);
      if (!root) return deleted;

      // recalc height
      root.meta.height = Math.max(height(root.left), height(root.right)) + 1;
      // get node balance factor
      const balance = getBalance(root);

      // left left Case
      if (balance > 1 && root.left && getBalance(root.left) >= 0) {
        rotateRight(root);
      }

      // Left Right Case
      if (balance > 1 && root.left && getBalance(root.left) < 0) {
        root.left = rotateLeft(root.left);
        rotateRight(root);
      }

      // Right Right Case
      if (balance < -1 && root.right && getBalance(root.right) <= 0)
        rotateLeft(root);

      // Right Left Case
      if (balance < -1 && root.right && getBalance(root.right) > 0) {
        root.right = rotateRight(root.right);
        rotateLeft(root);
      }
      return deleted;
    },

    // delete value
    remove: function remove(value) {
      return this._remove(value) !== undefined;
    },
  };

  return treeObj;
};

export default avlTree;
