import {BinaryTree, Node} from '../../../data-structures/tree/binaryTree';

export default function isPerfectTree<T>(tree: BinaryTree<T>): boolean {
  // get depth at node as root
  const getDepth = (node: Node<T> | null): number => {
    let depth = 0;
    while (node !== null) {
      node = node.left;
      depth++;
    }
    return depth;
  };

  const isPerfect = (
    node: Node<T> | null,
    depth: number,
    currentDepth: number,
  ): boolean => {
    if (node === null) return true;
    if (node.left === null && node.right === null)
      return depth === currentDepth;
    if (node.left && node.right) {
      return (
        isPerfect(node.left, depth, currentDepth + 1) &&
        isPerfect(node.right, depth, currentDepth + 1)
      );
    }
    return false;
  };

  const depth = getDepth(tree.root);
  return isPerfect(tree.root, depth, 1);
}
