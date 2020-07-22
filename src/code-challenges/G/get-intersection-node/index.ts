export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (headA === null || headB === null) return null;

  let pointer1: ListNode | null = headA;
  let pointer2: ListNode | null = headB;
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
    if (pointer1 === pointer2) return pointer1;
    if (pointer1 === null) {
      pointer1 = headB;
    }
    if (pointer2 === null) {
      pointer2 = headA;
    }
  }

  return pointer1;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.next = null;
  }
}
