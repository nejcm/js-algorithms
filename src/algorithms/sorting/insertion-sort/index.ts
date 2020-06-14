import {lessThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const insertionSort = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    compareFunction: lessThan,
    ...options,
  };

  const algoProps: AlgorithmProps<T> = {
    run: (values) => {
      const array = [...values];
      const len = array.length;
      if (len <= 1) {
        return {
          result: values,
        };
      }

      for (let i = 1; i < len; i++) {
        run(algoOptions.visitingCallback, [array[i]]);
        let j = i;
        while (j > 0) {
          run(algoOptions.visitingCallback, [array[j - 1]]);
          if (!run(algoOptions.compareFunction, [array[j], array[j - 1]])) {
            break;
          }
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          j--;
        }
      }
      return {
        result: array,
      };
    },
  };

  return algorithm(algoProps);
};

export default insertionSort;
