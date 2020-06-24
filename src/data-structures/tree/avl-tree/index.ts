import createBinaryTree, {BinarySearchTree, Node} from '../binary-search-tree';

export interface AvlTree<T> extends BinarySearchTree<T> {
  insert(this: AvlTree<T>, value: T): AvlTree<T>;
  balance(this: AvlTree<T>, node: Node<T>): AvlTree<T>;
}

const avlTree = <T>(): AvlTree<T> => {
  const binarySearchTree = createBinaryTree<T>();
  const treeObj: AvlTree<T> = {
    ...binarySearchTree,

    // insert value
    insert: function insert(value) {
      binarySearchTree.insert(value);

      // move up to root and balance
      /*let currentNode = this.get(value);
      /while (currentNode) {
        this.balance(currentNode);
        currentNode = currentNode;
      }*/

      return this;
    },

    // balance the tree
    balance: function balance(node) {
      console.log(node);
      return this;
    },
  };

  return treeObj;
};

export default avlTree;
