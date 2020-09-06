import {lessThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const mergeSort = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    visitingCallback: () => undefined,
    compareFunction: lessThan,
    ...options,
  };

  function sort(array: T[]): T[] {
    const len = array.length;
    if (len <= 1) return array;
    const m = Math.floor(len / 2);
    // split array into left and right
    const lArray = array.slice(0, m);
    const rArray = array.slice(m, len);

    // sort two halves and merge them
    return merge(sort(lArray), sort(rArray));
  }

  // merge left and right array
  function merge(left: T[], right: T[]): T[] {
    const merged: T[] = [];
    // loop halves
    while (left.length && right.length) {
      let min;
      // get minimum of arrays by comparing first elements
      if (algoOptions.compareFunction!(left[0], right[0])) {
        min = left.shift() as T;
      } else {
        min = right.shift() as T;
      }
      algoOptions.visitingCallback!(min);
      // push minimum to the sorted array
      merged.push(min);
    }

    // add leftover elements
    const rest = [...left, ...right];
    algoOptions.visitingCallback!();
    return [...merged, ...rest];
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

export default mergeSort;
