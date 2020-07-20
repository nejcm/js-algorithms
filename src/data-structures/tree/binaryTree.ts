export type ToStringCallback<T> = (current: Node<T>) => string;
export type Key = string | number;
export interface Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  key: Key;
  value?: T;
  [key: string]: unknown;
}
export type ToArrayCallback<T, K> = (node: Node<T>) => K;
export interface BinaryTree<T> {
  size: number;
  root: Node<T> | null;
  createNode<T>(key: Key, value?: T, other?: {[key: string]: unknown}): Node<T>;
  _insert(this: BinaryTree<T>, key: Key, value?: T): Node<T> | undefined;
  _remove(this: BinaryTree<T>, key: Key): Node<T> | undefined;
  _get(this: BinaryTree<T>, key: Key): Node<T> | undefined;
  _has(this: BinaryTree<T>, key: Key): boolean;
  _findMin(this: BinaryTree<T>): Node<T> | undefined;
  traverse(this: BinaryTree<T>): Generator<Node<T>, void, Node<T>>;
  traversePreOrder(this: BinaryTree<T>): Generator<Node<T>, void, Node<T>>;
  traversePostOrder(this: BinaryTree<T>): Generator<Node<T>, void, Node<T>>;
  toArray(this: BinaryTree<T>): Key[];
  toArray<K>(this: BinaryTree<T>, callback: ToArrayCallback<T, K>): K[];
  toString(this: BinaryTree<T>, separator?: string): string;
}

const binaryTree = <T>(): BinaryTree<T> => {
  const tree: BinaryTree<T> = {
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

    // traverse tree nodes in order
    traverse: function* traverse() {
      function* helper(node: Node<T> | null): Generator<Node<T>, void, Node<T>> {
        if (!node) return;

        // traverse the left subtree
        if (node.left !== null) {
          yield* helper(node.left);
        }

        // yield node value
        yield node;

        // traverse the right subtree
        if (node.right !== null) {
          yield* helper(node.right);
        }
      }

      yield* helper(this.root);
    },

    // traverse tree nodes in pre order
    traversePreOrder: function* traversePreOrder() {
      function* helper(node: Node<T> | null): Generator<Node<T>, void, Node<T>> {
        if (!node) return;

        // yield node value
        yield node;

        // traverse the left subtree
        if (node.left !== null) {
          yield* helper(node.left);
        }

        // traverse the right subtree
        if (node.right !== null) {
          yield* helper(node.right);
        }
      }
      yield* helper(this.root);
    },

    // traverse tree nodes in post order
    traversePostOrder: function* traversePostOrder() {
      function* helper(node: Node<T> | null): Generator<Node<T>, void, Node<T>> {
        if (!node) return;

        // traverse the left subtree
        if (node.left !== null) {
          yield* helper(node.left);
        }

        // traverse the right subtree
        if (node.right !== null) {
          yield* helper(node.right);
        }

        // yield node value
        yield node;
      }
      yield* helper(this.root);
    },

    // get array of all node values in order with custom callback
    toArray: function toArray<K>(
      callback: ToArrayCallback<T, K> = (node) => (node.key as unknown) as K,
    ) {
      const result: K[] = [];

      // traverse over nodes in order
      // init iterator
      const iterator = this.traverse();
      let current = iterator.next();
      while (!current.done) {
        result.push(callback(current.value));
        current = iterator.next();
      }

      return result;
    },

    // get string of all values
    toString: function toString(separator = ', ') {
      return this.toArray().join(separator);
    },
  };

  return tree;
};

export default binaryTree;
