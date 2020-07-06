import {RedBlackTree} from '../../../data-structures/tree/red-black-tree';
import {Node} from '../../../data-structures/tree/tree';

export default function isValidRedBlackTree<T>(tree: RedBlackTree<T>): boolean {
  const validate = (node: Node<T> | null): number => {
    // empty root
    if (node === null) return 0;

    // check consecutive red nodes
    if (tree.isRed(node) && (tree.isRed(node.left) || tree.isRed(node.right)))
      return -1;

    const leftHeight = validate(node.left);
    const rightHeight = validate(node.right);
    const add = tree.isBlack(node) ? 1 : 0;
    // check number of black nodes from null leaf to root
    if (leftHeight === -1 || rightHeight === -1 || leftHeight !== rightHeight)
      return -1;
    else return leftHeight + add;
  };

  // empty tree
  if (tree.root === null) return true;
  // is root black
  if (!tree.isBlack(tree.root)) return false;
  // validate red and black nodes
  return validate(tree.root) !== -1;
}
