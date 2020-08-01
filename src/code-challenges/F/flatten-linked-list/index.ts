class Node {
  val: number;
  next: Node | null;
  prev: Node | null;
  child: Node | null;
  constructor(val?: number, next?: Node | null, prev?: Node | null, child?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
    this.child = child === undefined ? null : child;
  }
}

export function flatten(head: Node | null): Node | null {
  if (head == null) return head;

  let result: Node | null = head;
  while (result !== null) {
    if (result.child === null) {
      result = result.next;
      continue;
    }

    let temp = result.child;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = result.next;
    if (result.next !== null) result.next.prev = temp;
    result.next = result.child;
    result.child.prev = result;
    result.child = null;
  }
  return head;
}

export function flattenV2(head: Node | null): Node | null {
  if (head == null) return head;

  let result: Node | null = head;
  while (result !== null) {
    if (result.child === null) {
      result = result.next;
      continue;
    }

    let child = result.child as Node;
    const childHead = child;
    child.prev = result;
    while (child.next !== null) {
      child = child.next;
    }
    child.next = result.next || null;
    if (result.next) result.next.prev = child;
    result.next = childHead;
    result.child = null;
  }
  return head;
}

export function flattenV3(head: Node | null): Node | null {
  const recur = (node: Node | null): Node | null => {
    let prev = node;
    while (node !== null) {
      prev = node;

      if (node.child === null) {
        node = node.next;
        continue;
      }

      const next = node.next;
      node.next = node.child;
      node.child.prev = node;

      const ret = recur(node.child) as Node;
      node.child = null;

      if (next !== null) {
        ret.next = next;
        next.prev = ret;
        node = next;
      } else {
        node = ret;
      }
    }
    return prev;
  };

  const curr = head;
  recur(curr);
  return head;
}
