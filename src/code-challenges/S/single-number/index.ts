export function singleNumber(nums: number[]): number {
  let missing = 0;
  for (let i = 0; i < nums.length; i++) {
    missing ^= nums[i];
  }
  return missing;
}
