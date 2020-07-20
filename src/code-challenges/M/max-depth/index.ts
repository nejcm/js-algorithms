export function maxDepth(root: TreeNode | null): number {
  let max = 0;
  const calcDepth = (node: TreeNode | null, depth = 1): void => {
    if (node === null) return;
    if (node.left === null && node.right === null) max = Math.max(depth, max);
    calcDepth(node.left, depth + 1);
    calcDepth(node.right, depth + 1);
  };
  calcDepth(root);
  return max;
}

export function maxDepthV2(root: TreeNode | null): number {
  const calcDepth = (node: TreeNode | null): number => {
    if (node === null) return 0;

    const left = calcDepth(node.left);
    const right = calcDepth(node.right);
    return Math.max(left, right) + 1;
  };
  return calcDepth(root);
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
