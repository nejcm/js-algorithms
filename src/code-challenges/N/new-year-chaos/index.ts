export function minimumBribes(q: number[]): void {
  let bribes = 0;
  const len = q.length;
  for (let i = 0; i < len; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic');
      return;
    }
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) bribes++;
    }
  }
  console.log(bribes);
}
