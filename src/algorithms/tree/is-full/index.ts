import {BinaryTree, Node} from '../../../data-structures/tree/binaryTree';

export default function isFullTree<T>(tree: BinaryTree<T>): boolean {
  const isFull = (node: Node<T> | null): boolean => {
    if (node === null) return true;
    if (node.left === null && node.right === null) return true;
    if (node.left && node.right) {
      return isFull(node.left) && isFull(node.right);
    }
    return false;
  };

  return isFull(tree.root);
}
