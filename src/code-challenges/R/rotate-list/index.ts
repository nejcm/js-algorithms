class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 0) return head;

  let tail = head;
  let len = 1;
  while (tail.next !== null) {
    tail = tail.next;
    len++;
  }
  k %= len;
  if (k === 0) return head;

  let curr: ListNode | null = head;
  let i = 1;
  while (i < len - k && curr.next !== null) {
    curr = curr.next;
    i++;
  }
  tail.next = head;
  const next = curr.next;
  curr.next = null;
  return next;
}
