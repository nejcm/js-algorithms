import {Node} from '../../../data-structures/tree/binaryTree';

// return false from callback to stop searching
export type Callback = <T>(node: Node<T>) => boolean;

export default function depthFirstSearch<T>(
  start: Node<T> | null | undefined,
  callback: Callback,
): void {
  // is empty
  if (!start) return;

  const dfs = (node: Node<T>): boolean => {
    // call callback
    if (!callback(node)) return false;

    // left subtree
    if (node.left) {
      if (!dfs(node.left)) return false;
    }

    // right subtree
    if (node.right) {
      if (!dfs(node.right)) return false;
    }

    return true;
  };

  dfs(start);
}
