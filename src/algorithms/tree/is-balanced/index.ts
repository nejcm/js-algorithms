import {BinaryTree, Node} from '../../../data-structures/tree/binaryTree';

export default function isBalancedTree<T>(tree: BinaryTree<T>): boolean {
  // get height of subtree at node as root
  const height = (node: Node<T> | null): number => {
    if (node === null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };

  // check if tree is balanced
  const isBalanced = (node: Node<T> | null): boolean => {
    // if empty tree
    if (node === null) return true;

    // left height
    const lh = height(node.left);
    // right height
    const rh = height(node.right);
    if (Math.abs(lh - rh) <= 1 && isBalanced(node.left) && isBalanced(node.right)) {
      return true;
    }

    return false;
  };

  return isBalanced(tree.root);
}
