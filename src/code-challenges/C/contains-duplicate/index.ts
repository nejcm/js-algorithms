export function containsDuplicate(nums: number[]): boolean {
  const hashSet: {[key: number]: boolean} = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashSet[nums[i]]) return true;
    hashSet[nums[i]] = true;
  }
  return false;
}
