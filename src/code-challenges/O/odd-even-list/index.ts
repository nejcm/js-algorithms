class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let odd = head;
  const even = head.next;
  while (odd.next && odd.next.next) {
    const tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
}

export function oddEvenListV2(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
