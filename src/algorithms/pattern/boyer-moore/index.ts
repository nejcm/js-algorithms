import {max} from '../../../helpers';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

export interface BoyerMooreOptions extends Options {
  chars: number;
}

const boyerMoore = (options?: Partial<BoyerMooreOptions>): Algorithm => {
  const algoOptions: BoyerMooreOptions = {
    chars: 256,
    ...options,
  };

  const buildBadCharHeuristic = (seek: string, m: number): number[] => {
    const badChar = [];
    // initialize all occurrences as -1
    for (let i = 0; i < algoOptions.chars; i++) badChar.push(-1);
    // fill the actual value of last occurrence of a character
    for (let i = 0; i < m; i++) badChar[seek.charCodeAt(i)] = i;
    return badChar;
  };

  const search = (text: string, seek: string): number | null => {
    if (!text || !seek) return -1;
    const n = text.length;
    const m = seek.length;
    if (n === 0 || m === 0 || m > n) return -1;

    const badChar = buildBadCharHeuristic(seek, m);
    let s = 0;
    while (s <= n - m) {
      let j = m - 1;
      while (j >= 0 && seek[j] === text[s + j]) j--;
      if (j < 0) {
        // match found at s
        return s;
        // s += s + m < n ? m - badChar[text.charCodeAt(s + m)] : 1;
      } else {
        s += max(1, j - badChar[text.charCodeAt(s + j)]);
      }
    }
    return -1;
  };

  const algoProps: AlgorithmProps = {
    run: (value, seek) => {
      const result = search(value, seek);
      return {
        result,
      };
    },
  };

  return algorithm(algoProps);
};

export default boyerMoore;
