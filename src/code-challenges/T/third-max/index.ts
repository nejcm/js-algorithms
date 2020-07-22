export function thirdMax(nums: number[]): number {
  let m1, m2, m3;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === m1 || nums[i] === m2 || nums[i] === m3) continue;
    if (m1 === undefined || nums[i] > m1) {
      m3 = m2;
      m2 = m1;
      m1 = nums[i];
    } else if (m2 === undefined || nums[i] > m2) {
      m3 = m2;
      m2 = nums[i];
    } else if (m3 === undefined || nums[i] > m3) {
      m3 = nums[i];
    }
  }
  return m3 === undefined ? (m1 as number) : m3;
}

export function thirdMaxV2(nums: number[]): number {
  const maxes: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (maxes[0] === undefined || nums[i] >= maxes[0]) {
      if (nums[i] !== maxes[0]) maxes.unshift(nums[i]);
    } else if (maxes[1] === undefined || nums[i] >= maxes[1]) {
      if (nums[i] !== maxes[1]) maxes.splice(1, 0, nums[i]);
    } else if (maxes[2] === undefined || nums[i] > maxes[2]) {
      if (nums[i] !== maxes[2]) maxes.splice(2, 0, nums[i]);
    }
  }
  return maxes[2] === undefined ? maxes[0] : maxes[2];
}
