export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow = head;
  let fast = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  return true;
}

export function hasCycleAt(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next as ListNode;
        fast = fast.next as ListNode;
      }
      return slow;
    }
  }
  return null;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.next = null;
  }
}
