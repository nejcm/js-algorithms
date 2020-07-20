export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return true;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  const stack: number[] = [head.val];

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
    stack.push(slow.val);
  }

  if (fast.next === null) stack.pop();

  slow = slow.next;
  while (slow !== null) {
    if (stack.pop() !== slow.val) return false;
    slow = slow.next;
  }
  return true;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
