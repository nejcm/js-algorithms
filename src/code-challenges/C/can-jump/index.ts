export function canJump(nums: number[]): boolean {
  if (!nums.length) return false;
  const len = nums.length;

  let canWalk = nums[0];
  for (let i = 1; i < len; i++) {
    if (canWalk === 0) return false;
    canWalk--;
    canWalk = Math.max(canWalk, nums[i]);
  }
  return true;
}

export function canJumpV2(nums: number[]): boolean {
  const len = nums.length;

  const helper = (pos: number): number => {
    if (pos === len - 1) return pos;
    const next = helper(pos + 1);
    return pos + nums[pos] >= next ? pos : next;
  };
  return helper(0) === 0;
}

export function canJumpV3(nums: number[]): boolean {
  if (!nums.length) return false;
  const len = nums.length;
  const reach = len - 1;

  let curr = 0;
  while (curr < reach) {
    if (nums[curr] === 0) return false;
    if (curr + nums[curr] >= reach) return true;

    let next = curr + 1;
    for (let j = next; j <= curr + nums[curr]; j++) {
      if (j + nums[j] > next + nums[next]) next = j;
    }
    curr = next;
  }
  return true;
}
