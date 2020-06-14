import {equalThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import polyHasher from '../../cryptography/polynomial-hash';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';
const hasher = polyHasher();

const rabinKarp = (options?: Options): Algorithm => {
  const algoOptions: Options = {
    compareFunction: equalThan,
    ...options,
  };

  const search = (text: string, seek: string): number | null => {
    if (!text || !seek) {
      return -1;
    }

    const n = text.length;
    const m = seek.length;
    if (n === 0 || m === 0 || m > n) {
      return -1;
    }

    const seekHash = hasher.hash(seek);

    let prevFrame = null;
    let currentFrameHash = null;
    for (let i = 0; i <= n - m; i++) {
      const currentFrame = text.substring(i, i + m);

      currentFrameHash =
        currentFrameHash === null || prevFrame === null
          ? hasher.hash(currentFrame)
          : hasher.roll(currentFrameHash, prevFrame, currentFrame);
      prevFrame = currentFrame;

      if (run(algoOptions.compareFunction, [seekHash, currentFrameHash])) {
        for (let j = 0; j < m; j++) {
          if (text[i + j] !== seek[j]) {
            break;
          }
          if (j === m - 1) {
            return i;
          }
        }
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

export default rabinKarp;
