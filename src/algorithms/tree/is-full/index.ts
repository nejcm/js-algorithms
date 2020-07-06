import {Node, Tree} from '../../../data-structures/tree/tree';

export default function isFullTree<T>(tree: Tree<T>): boolean {
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
