export function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  while (k--) {
    nums.unshift(nums.pop() as number);
  }
}

export function rotateV2(nums: number[], k: number): void {
  k = k % nums.length;
  const rotated = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
  nums.splice(0, nums.length, ...rotated);
}

export function rotateV3(nums: number[], k: number): void {
  const reverse = <T>(arr: T[], left: number, right: number): void => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}
