import {BinaryTree, Node} from '../../../data-structures/tree/binaryTree';

export default function isCompleteTree<T>(tree: BinaryTree<T>): boolean {
  const isComplete = (node: Node<T> | null, index: number): boolean => {
    if (node === null) return true;
    if (index >= tree.size) return false;

    // If the index of any element in the array is i,
    // the element in the index 2i+1 will become the left child
    // and element in 2i+2 index will become the right child.
    // Also, the parent of any element at index i is given by the lower bound of (i-1)/2.
    return isComplete(node.left, 2 * index + 1) && isComplete(node.right, 2 * index + 2);
  };

  return isComplete(tree.root, 0);
}
