export function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  const set = Array.from(new Set(nums));
  nums.splice(0, len);
  nums.push(...set);
  return nums.length;
}

export function removeDuplicatesV2(nums: number[]): number {
  if (!nums.length) return 0;

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      nums[++k] = nums[i];
    }
  }
  nums.length = k + 1;
  return nums.length;
}
