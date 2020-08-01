export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;
  const result: number[] = [];
  while (node !== null) {
    result.push(node.val);
    if (node.right !== null) stack.push(node.right);
    node = node.left || stack.pop() || null;
  }
  return result;
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
