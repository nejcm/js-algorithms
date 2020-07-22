export function findNumbers(nums: number[]): number {
  return nums.reduce((ac, curr) => ac + (curr.toString().length % 2 === 0 ? 1 : 0), 0);
}

export function findNumbersV2(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
    i++;
  }
  return count;
}
