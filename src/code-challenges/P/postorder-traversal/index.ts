export function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  const stack: TreeNode[] = [root];
  const result: number[] = [];

  while (stack.length) {
    const current = stack.pop() as TreeNode;
    result.unshift(current.val);

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
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
