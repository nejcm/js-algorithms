export function preorder(root: Node): number[] {
  if (root === null) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const next = stack.pop() as Node;
    result.push(next.val);
    const len = next.children ? next.children.length : 0;
    for (let i = len - 1; i >= 0; i--) {
      stack.push(next.children[i]);
    }
  }

  return result;
}

class Node {
  val: number;
  children: Node[];
  constructor(val: number, children: Node[] = []) {
    this.val = val;
    this.children = children;
  }
}
