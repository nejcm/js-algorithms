export type ToStringCallback<T> = (current: Node<T>) => string;
export type Meta = {[key: string]: unknown};
export interface Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  value: T;
  meta: Meta;
}
export interface Tree<T> {
  size: number;
  root: Node<T> | null;
  createNode<T>(value: T, meta?: Meta): Node<T>;
  _insert(this: Tree<T>, value: T): Node<T> | undefined;
  _remove(this: Tree<T>, value: T): Node<T> | undefined;
  _get(this: Tree<T>, value: T): Node<T> | undefined;
  _has(this: Tree<T>, value: T): boolean;
  _findMin(this: Tree<T>): Node<T> | undefined;
  iterate(this: Tree<T>): Generator<T, void, T>;
  toArray(this: Tree<T>): T[];
  toString(this: Tree<T>, separator?: string): string;
}

const tree = <T>(): Tree<T> => {
  const treeObj: Tree<T> = {
    root: null,
    size: 0,

    // create node
    createNode: function createNode(value, meta = {}) {
      return {
        left: null,
        right: null,
        value,
        meta,
      };
    },

    // add a value
    _insert: function _insert(value) {
      const newNode = this.createNode(value);

      // set root if empty
      if (!this.root) {
        this.root = newNode;
        this.size++;
        return this.root;
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
            return current.left;
          }
          current = current.left;
        } else if (value > current.value) {
          // if the new value is greater than this node's value, go right
          if (current.right === null) {
            // if there's no right, then insert node there
            current.right = newNode;
            this.size++;
            return current.right;
          }
          current = current.right;
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
        return nodeToRemove;
      }

      // no children
      if (nodeToRemove.value < parent.value) {
        parent.left = replacement;
      } else {
        parent.right = replacement;
      }
      return nodeToRemove;
    },

    // get node
    _get: function _get(value) {
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
    _has: function _has(value) {
      return this._get(value) !== undefined;
    },

    // get min node
    _findMin: function _findMin() {
      const min = (node: Node<T> | null): Node<T> | undefined => {
        return node?.left ? min(node.left) : node || undefined;
      };
      return min(this.root);
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
    toString: function toString(separator = ', ') {
      return this.toArray().join(separator);
    },
  };

  return treeObj;
};

export default tree;
