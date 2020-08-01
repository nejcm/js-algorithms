class Node {
  val: number;
  next: Node | null;
  random: Node | null | Node;
  constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function copyRandomList(head: Node | null): Node | null {
  if (head === null) return null;

  const map = new Map<Node, Node>();
  let curr: Node | null = head;
  while (curr !== null) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    const node = map.get(curr) as Node;
    if (curr.next) node.next = map.get(curr.next) || null;
    if (curr.random) node.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head) || null;
}
