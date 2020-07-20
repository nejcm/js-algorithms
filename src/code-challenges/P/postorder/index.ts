export function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const current = stack.pop() as TreeNode;
    result.unshift(current.val);
    stack.push(...current.children);
  }

  return result;
}

class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val: number, children: TreeNode[]) {
    this.val = val;
    this.children = children;
  }
}
