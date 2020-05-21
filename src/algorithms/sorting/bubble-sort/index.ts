import {lessThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../../Algorithm';

const bubbleSort = <T>(options?: Options<T>): Algorithm<T> => {
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
      let swapped = false;

      for (let i = 1; i < len; i++) {
        swapped = false;
        run(algoOptions.visitingCallback, [array[i]]);

        for (let j = 0; j < len - i; j++) {
          run(algoOptions.visitingCallback, [array[j]]);

          if (run(algoOptions.compareFunction, [array[j + 1], array[j]])) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            swapped = true;
          }
        }

        if (!swapped) {
          return {
            result: array,
          };
        }
      }

      return {
        result: array,
      };
    },
  };

  return algorithm(algoProps);
};

export default bubbleSort;
