export function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const a = Math.abs(nums[i]) - 1;
    if (nums[a] > 0) nums[a] = -nums[a];
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
}
