export function areSimilar(a: number[], b: number[]): boolean {
  const ad = a.filter((v, i) => v !== b[i]);
  const bd = b.filter((v, i) => v !== a[i]);
  return (
    ad.length == 0 || (ad.length == 2 && ad.join('') === bd.reverse().join(''))
  );
}

export function areSimilarV2(a: number[], b: number[]): boolean {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) arr.push(a[i], b[i]);
  }
  return arr.length < 5 && new Set(arr).size < 3;
}

export function areSimilarV3(a: number[], b: number[]): boolean {
  let swaps = 0;
  const len = a.length;
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) {
      swaps++;
      let j = i;
      while (j < len) {
        if (a[i] === b[j] && a[j] === b[i]) {
          [b[i], b[j]] = [b[j], b[i]];
          break;
        }
        j++;
      }

      if (swaps > 1) {
        return false;
      }
    }
  }
  return true;
}
