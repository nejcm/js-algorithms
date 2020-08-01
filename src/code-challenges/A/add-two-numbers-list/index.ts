class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let result = new ListNode(0);
  const resultHead = result;
  let sum = 0;
  while (l1 !== null || l2 !== null) {
    sum = Math.floor(sum / 10);
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    result.next = new ListNode(sum % 10);
    result = result.next;
  }
  if (sum >= 10) result.next = new ListNode(1);
  return resultHead.next;
}
