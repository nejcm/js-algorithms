import {lessThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const bubbleSort = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    compareFunction: lessThan,
    visitingCallback: () => undefined,
    ...options,
  };

  const algoProps: AlgorithmProps<T> = {
    run: (values) => {
      const array = [...values];
      const len = array.length;
      if (len <= 1) return {result: values};

      let swapped = false;
      for (let i = 1; i < len; i++) {
        swapped = false;
        algoOptions.visitingCallback!(array[i]);

        for (let j = 0; j < len - i; j++) {
          algoOptions.visitingCallback!(array[j]);
          // compare elements
          if (algoOptions.compareFunction!(array[j + 1], array[j])) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            swapped = true;
          }
        }
        // if no elemets were swapped
        // the array is already sorted
        if (!swapped) break;
      }
      return {result: array};
    },
  };

  return algorithm(algoProps);
};

export default bubbleSort;
