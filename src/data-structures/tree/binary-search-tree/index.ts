export type ToStringCallback<T> = (current: Node<T>) => string;
export type Meta = {[key: string]: unknown};
export interface Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  value: T;
  meta: Meta;
}
export interface BinarySearchTree<T> {
  size: number;
  root: Node<T> | null;
  insert(this: BinarySearchTree<T>, value: T): Node<T> | undefined;
  _remove(
    this: BinarySearchTree<T>,
    value: T,
  ): {removed: Node<T>; replacement: Node<T> | null} | undefined;
  remove(this: BinarySearchTree<T>, value: T): boolean;
  get(this: BinarySearchTree<T>, value: T): Node<T> | undefined;
  has(this: BinarySearchTree<T>, value: T): boolean;
  _findMin(this: BinarySearchTree<T>): Node<T> | undefined;
  findMin(this: BinarySearchTree<T>): T | undefined;
  iterate(this: BinarySearchTree<T>): Generator<T, void, T>;
  toArray(this: BinarySearchTree<T>): T[];
  toString(this: BinarySearchTree<T>, separator?: string): string;
}

export const createNode = <T>(value: T, meta: Meta = {}): Node<T> => {
  return {
    left: null,
    right: null,
    value,
    meta,
  };
};

const tree = <T>(): BinarySearchTree<T> => {
  const treeObj: BinarySearchTree<T> = {
    root: null,
    size: 0,

    // add a value
    insert: function insert(value) {
      const newNode = createNode(value);

      // set root if empty
      if (!this.root) {
        this.root = newNode;
        this.size++;
        return newNode;
      }

      let current = this.root;
      // loop until we find the correct spot
      while (current) {
        if (value < current.value) {
          // if the new value is less than this node's value, go left
          if (current.left === null) {
            // if there's no left, then insert node there
            current.left = newNode;
            this.size++;
            break;
          }
          current = current.left;
          return newNode;
        } else if (value > current.value) {
          // if the new value is greater than this node's value, go right
          if (current.right === null) {
            // if there's no right, then insert node there
            current.right = newNode;
            this.size++;
            break;
          }
          current = current.right;
          return newNode;
        } else {
          // ignore if value exists
          break;
        }
      }
      return undefined;
    },

    // remove node
    _remove: function _remove(value) {
      let current = this.root;
      // empty tree
      if (current === null) {
        return undefined;
      }

      let found = false;
      let parent = this.root as Node<T>;

      // find node
      while (current !== null) {
        if (value < current.value) {
          // left
          parent = current;
          current = current.left;
        } else if (value > current.value) {
          // right
          parent = current;
          current = current.right;
        } else {
          // found at current
          found = true;
          break;
        }
      }

      // exit if not found
      if (!found) {
        return undefined;
      }

      this.size--;

      const nodeToRemove = current as Node<T>;
      let replacement = null;
      let replacementParent = null;
      // has left and right child
      if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
        replacement = nodeToRemove.left;
        replacementParent = nodeToRemove;

        // traverse right subtree
        while (replacement.right !== null) {
          replacementParent = replacement;
          replacement = replacement.right;
        }

        // no subtree anymore
        replacement.right = nodeToRemove.right;

        if (replacementParent !== nodeToRemove) {
          // remove replacement
          replacementParent.right = replacement.left;
          // attach left subtree
          replacement.left = nodeToRemove.left;
        }
      } else if (nodeToRemove.left !== null) {
        replacement = nodeToRemove.left;
      } else if (nodeToRemove.right !== null) {
        replacement = nodeToRemove.right;
      }

      // is node is root
      if (nodeToRemove === this.root) {
        this.root = replacement;
        return {removed: nodeToRemove, replacement};
      }

      // no children
      if (nodeToRemove.value < parent.value) {
        parent.left = replacement;
      } else {
        parent.right = replacement;
      }
      return {removed: nodeToRemove, replacement};
    },

    // remove value
    remove: function remove(value) {
      return this.remove(value) !== null;
    },

    // get node
    get: function get(value) {
      let current = this.root;
      // traverse node's
      while (current) {
        if (value < current.value) {
          // left
          current = current.left;
        } else if (value > current.value) {
          // right
          current = current.right;
        } else {
          return current;
        }
      }
      return undefined;
    },

    // has / contains value
    has: function has(value) {
      return this.get(value) !== undefined;
    },

    // get min node
    _findMin: function _findMin() {
      const min = (node: Node<T> | null): Node<T> | undefined => {
        return node?.left ? min(node.left) : node || undefined;
      };
      return min(this.root);
    },

    // get min value
    findMin: function findMin() {
      return this._findMin()?.value;
    },

    // iterate over tree nodes
    iterate: function* iterate() {
      // get generator that iterates over the list elements
      const array = this.toArray();
      for (let i = 0; i < array.length; i++) {
        yield array[i];
      }
    },

    // get array of all values
    toArray: function toArray() {
      const result: T[] = [];
      function traverse(node: Node<T> | null) {
        if (!node) return;

        // traverse the left subtree
        if (node.left !== null) {
          traverse(node.left);
        }

        // yield node value
        result.push(node.value);

        // traverse the right subtree
        if (node.right !== null) {
          traverse(node.right);
        }
      }
      // start with the root
      traverse(this.root);
      return result;
    },

    // get string of all values
    toString: function toString(separator = ' -> ') {
      return this.toArray().join(separator);
    },
  };

  return treeObj;
};

export default tree;
