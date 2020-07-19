export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.right = left;
  root.left = right;

  return root;
}

export function invertTreeV2(
  root: TreeNode | null,
  queue: TreeNode[] = [],
): TreeNode | null {
  if (root === null) return root;

  queue.push(root);
  while (queue.length) {
    const cur = queue[0] as TreeNode;

    [cur.left, cur.right] = [cur.right, cur.left];

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  return root;
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
