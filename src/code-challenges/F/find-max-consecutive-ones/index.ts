export function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++;
      if (curr > max) max = curr;
    } else curr = 0;
  }
  return max;
}
