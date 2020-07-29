class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  while (head !== null) {
    if (head.val !== val) {
      curr.next = head;
      curr = curr.next;
    }
    head = head.next;
  }
  curr.next = null;
  return dummy.next;
}

export function removeElementsV2(head: ListNode | null, val: number): ListNode | null {
  const remove = (node: ListNode | null): ListNode | null => {
    if (node === null) return null;
    node.next = remove(node.next);
    return node.val === val ? node.next : node;
  };
  return remove(head);
}
