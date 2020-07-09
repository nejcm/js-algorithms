import createQueue from '../../../data-structures/queue';
import {Node} from '../../../data-structures/tree/binaryTree';

// return false from callback to stop searching
export type Callback<T> = (node: Node<T>) => boolean;

export default function depthFirstSearch<T>(
  start: Node<T> | null | undefined,
  callback: Callback<T>,
): void {
  // is empty
  if (!start) return;

  // create node queue
  const queue = createQueue<Node<T>>();
  // queue first node
  queue.enqueue(start);
  while (!queue.isEmpty()) {
    const node = queue.dequeue() as Node<T>;
    // call callback
    if (!callback(node)) return;

    // left subtree
    if (node.left) {
      queue.enqueue(node.left);
    }

    // right subtree
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}
