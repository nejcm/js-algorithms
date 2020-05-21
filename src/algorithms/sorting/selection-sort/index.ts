import {lessThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../../Algorithm';

const selectionSort = <T>(options?: Options<T>): Algorithm<T> => {
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

      for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        run(algoOptions.visitingCallback, [array[i]]);

        for (let j = i + 1; j < len; j++) {
          run(algoOptions.visitingCallback, [array[j]]);

          if (run(algoOptions.compareFunction, [array[j], array[minIndex]])) {
            minIndex = j;
          }
        }

        if (minIndex !== i) {
          [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
      }

      return {
        result: array,
      };
    },
  };

  return algorithm(algoProps);
};

export default selectionSort;
