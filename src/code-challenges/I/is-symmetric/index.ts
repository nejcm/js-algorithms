export function isSymmetric(root: TreeNode | null): boolean {
  const check = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;

    return (
      node1.val === node2.val &&
      check(node1.left, node2.right) &&
      check(node1.right, node2.left)
    );
  };
  return check(root, root);
}

type StackElement = [TreeNode | null, TreeNode | null];
export function isSymmetricV2(root: TreeNode | null): boolean {
  if (!root) return true;
  const stack: StackElement[] = [[root.left, root.right]];

  while (stack.length > 0) {
    const [left, right] = stack.pop() as StackElement;
    if (left === null && right === null) continue;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    stack.push([left.left, right.right]);
    stack.push([left.right, right.left]);
  }
  return true;
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
