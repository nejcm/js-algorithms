export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const stack: [number, TreeNode][] = [[0, root]];
  const result: number[][] = [];

  while (stack.length) {
    const [level, current] = stack.shift() as [number, TreeNode];
    if (!result[level]) result.push([]);
    result[level].push(current.val);

    if (current.left !== null) stack.push([level + 1, current.left]);
    if (current.right !== null) stack.push([level + 1, current.right]);
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
