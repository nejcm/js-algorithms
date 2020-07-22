export function sortedSquares(A: number[]): number[] {
  let left = 0;
  let right = A.length - 1;
  const result: number[] = [];
  while (left <= right) {
    if (Math.abs(A[left]) < Math.abs(A[right])) {
      result.unshift(A[right] * A[right]);
      right--;
    } else {
      result.unshift(A[left] * A[left]);
      left++;
    }
  }
  return result;
}
