export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

export function reverseListRecursive(head: ListNode | null): ListNode | null {
  // null, last or only one node
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);

  // change references for middle chain
  head.next.next = head;
  head.next = null;

  // send back new head node
  return newHead;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
