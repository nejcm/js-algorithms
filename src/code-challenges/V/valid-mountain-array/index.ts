export function validMountainArray(A: number[]): boolean {
  if (A.length < 3 || A[0] >= A[1]) return false;

  let decreasing = false;
  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) return false;
    if (decreasing && A[i] > A[i - 1]) return false;
    if (A[i] < A[i - 1]) decreasing = true;
  }
  return decreasing;
}
