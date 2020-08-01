class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let merged: ListNode | null = new ListNode();
  const mergedHead: ListNode = merged;

  while (l1 !== null) {
    if (l2 === null || l1.val < l2.val) {
      merged.next = l1;
      l1 = l1.next;
    } else {
      merged.next = l2;
      l2 = l2.next;
    }
    merged = merged.next as ListNode;
  }
  if (l2 !== null) merged.next = l2;
  return mergedHead.next;
}

export function mergeTwoListsV2(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoListsV2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsV2(l1, l2.next);
    return l2;
  }
}
