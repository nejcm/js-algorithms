import {lessThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const shellSort = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    visitingCallback: () => undefined,
    compareFunction: lessThan,
    ...options,
  };

  function sort(array: T[]): T[] {
    const len = array.length;
    if (len <= 1) {
      return array;
    }

    // loop and reduce gap
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      // loop elements in gap
      for (let i = gap; i < len; i++) {
        algoOptions.visitingCallback!(array[i]);
        const temp = array[i];
        // shift earlier gap-sorted elements up until
        // the correct location for a[i] is found
        let j;
        for (
          j = i;
          j >= gap && algoOptions.compareFunction!(temp, array[j - gap]);
          j -= gap
        ) {
          algoOptions.visitingCallback!(array[j - gap]);
          array[j] = array[j - gap];
        }
        // put temp (the original a[i]) in its correct location
        array[j] = temp;
      }
    }

    return array;
  }

  const algoProps: AlgorithmProps<T> = {
    run: (values) => {
      const array = [...values];
      const result = sort(array);
      return {
        result,
      };
    },
  };

  return algorithm(algoProps);
};

export default shellSort;
