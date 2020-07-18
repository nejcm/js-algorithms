export function twoSum(nums: number[], target: number): number[] {
  const map = {[nums[0]]: 0};
  for (let i = 1; i < nums.length; i++) {
    const other = target - nums[i];
    if (map[other] !== undefined) return [map[other], i];
    map[nums[i]] = i;
  }
  return [];
}
