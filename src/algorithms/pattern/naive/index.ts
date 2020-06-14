import {equalThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const naiveAlgorithm = (options?: Options): Algorithm => {
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

    for (let i = 0; i <= n - m; i++) {
      let j;
      for (j = 0; j < m; j++) {
        if (!run(algoOptions.compareFunction, [text[i + j], seek[j]])) {
          break;
        }
      }

      if (j === m) {
        return i;
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

export default naiveAlgorithm;
