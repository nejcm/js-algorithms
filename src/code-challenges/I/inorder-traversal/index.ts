export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  const result: number[] = [];
  let current: TreeNode | null = root;
  let pre: TreeNode | null = null;
  while (current !== null) {
    if (current.left === null) {
      result.push(current.val);
      current = current.right;
    } else {
      pre = current.left;
      while (pre.right !== null) {
        pre = pre.right;
      }
      pre.right = current;
      const temp = current;
      current = current.left;
      temp.left = null;
    }
  }

  return result;
}

export function inorderTraversalV2(root: TreeNode | null): number[] {
  if (root === null) return [];

  const stack: TreeNode[] = [];
  const result: number[] = [];
  let current: TreeNode | null = root;
  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop() as TreeNode;
    result.push(current.val);
    current = current.right;
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
