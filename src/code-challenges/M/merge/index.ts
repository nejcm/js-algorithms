export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  while (j < n) {
    if (nums1[i] > nums2[j] || i >= m + j) {
      nums1.splice(i, 0, nums2[j]);
      j++;
    } else i++;
  }
  nums1.length = m + n;
}

export function mergeV2(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let index = m + n - 1;

  if (m !== 0 && n !== 0) {
    while (i >= 0 && j >= 0) {
      if (nums1[i] <= nums2[j]) {
        nums1[index--] = nums2[j--];
      } else {
        nums1[index--] = nums1[i--];
      }
    }
  }

  while (j >= 0) {
    nums1[index--] = nums2[j--];
  }
}
