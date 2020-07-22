export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || n === 0) return head;

  let prev = head;
  let curr = head;
  while (n > 0) {
    if (curr.next === null) {
      head = head.next;
      return head;
    }
    curr = curr.next;
    n--;
  }

  while (curr !== null && curr.next !== null) {
    prev = prev.next as ListNode;
    curr = curr.next;
  }
  prev.next = prev.next?.next || null;
  return head;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.next = null;
  }
}
