export type ToStringCallback<T> = (current: Node<T>) => string;
export type Key = string | number;
export interface Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  key: Key;
  value?: T;
  [key: string]: unknown;
}
export interface Tree<T> {
  size: number;
  root: Node<T> | null;
  createNode<T>(key: Key, value?: T, other?: {[key: string]: unknown}): Node<T>;
  _insert(this: Tree<T>, key: Key, value?: T): Node<T> | undefined;
  _remove(this: Tree<T>, key: Key): Node<T> | undefined;
  _get(this: Tree<T>, key: Key): Node<T> | undefined;
  _has(this: Tree<T>, key: Key): boolean;
  _findMin(this: Tree<T>): Node<T> | undefined;
  iterate(this: Tree<T>): Generator<Key, void, Key>;
  toArray(this: Tree<T>): Key[];
  toString(this: Tree<T>, separator?: string): string;
}

const tree = <T>(): Tree<T> => {
  const treeObj: Tree<T> = {
    root: null,
    size: 0,

    // create node
    createNode: function createNode(key, value, other = {}) {
      return {
        left: null,
        right: null,
        key,
        value,
        ...other,
      };
    },

    // add new node
    _insert: function _insert(key, value) {
      const newNode = this.createNode(key, value);

      // set root if empty
      if (!this.root) {
        this.root = newNode;
        this.size++;
        return this.root;
      }

      let current = this.root;
      // loop until we find the correct spot
      while (current) {
        if (key < current.key) {
          // if the new key is less than this node's key, go left
          if (current.left === null) {
            // if there's no left, then insert node there
            current.left = newNode;
            this.size++;
            return current.left;
          }
          current = current.left;
        } else if (key > current.key) {
          // if the new key is greater than this node's key, go right
          if (current.right === null) {
            // if there's no right, then insert node there
            current.right = newNode;
            this.size++;
            return current.right;
          }
          current = current.right;
        } else {
          // ignore if key exists
          break;
        }
      }
      return undefined;
    },

    // remove node
    _remove: function _remove(key) {
      let current = this.root;
      // empty tree
      if (current === null) {
        return undefined;
      }

      let found = false;
      let parent = this.root as Node<T>;

      // find node
      while (current !== null) {
        if (key < current.key) {
          // left
          parent = current;
          current = current.left;
        } else if (key > current.key) {
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
      if (nodeToRemove.key < parent.key) {
        parent.left = replacement;
      } else {
        parent.right = replacement;
      }
      return nodeToRemove;
    },

    // get node
    _get: function _get(key) {
      let current = this.root;
      // traverse node's
      while (current) {
        if (key < current.key) {
          // left
          current = current.left;
        } else if (key > current.key) {
          // right
          current = current.right;
        } else {
          return current;
        }
      }
      return undefined;
    },

    // has / contains key
    _has: function _has(key) {
      return this._get(key) !== undefined;
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
      const result: Key[] = [];
      function traverse(node: Node<T> | null) {
        if (!node) return;

        // traverse the left subtree
        if (node.left !== null) {
          traverse(node.left);
        }

        // yield node value
        result.push(node.key);

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
