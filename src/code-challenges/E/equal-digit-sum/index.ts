export function equalDigitSum(nums: number[]): number {
  const sumDigits = (num: number): number => {
    let sum = 0;
    while (num != 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  const map: {[key: number]: number} = {};
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    const digitSum = sumDigits(nums[i]);
    if (map[digitSum]) {
      max = Math.max(max, map[digitSum] + nums[i]);
    }
    map[digitSum] = Math.max(map[digitSum] || 0, nums[i]);
  }
  return max;
}
