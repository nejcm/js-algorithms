export function sortArrayByParity(A: number[]): number[] {
  const result = [A[0]];
  for (let i = 1; i < A.length; i++) {
    if (A[i] % 2 === 0) result.unshift(A[i]);
    else result.push(A[i]);
  }
  return result;
}

export function sortArrayByParityV2(A: number[]): number[] {
  let oddIndex = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      const temp = A[oddIndex];
      A[oddIndex++] = A[i];
      A[i] = temp;
    }
  }
  return A;
}
