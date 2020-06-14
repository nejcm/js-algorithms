import {lessThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const mergeSort = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    compareFunction: lessThan,
    ...options,
  };

  function sort(array: T[]): T[] {
    const len = array.length;
    if (len <= 1) {
      return array;
    }
    const m = Math.floor(len / 2);
    const lArray = array.slice(0, m);
    const rArray = array.slice(m, len);

    return merge(sort(lArray), sort(rArray));
  }

  function merge(left: T[], right: T[]): T[] {
    const merged: T[] = [];
    while (left.length && right.length) {
      let min;
      if (run(algoOptions.compareFunction, [left[0], right[0]])) {
        min = left.shift() as T;
      } else {
        min = right.shift() as T;
      }
      run(algoOptions.visitingCallback, [min]);

      merged.push(min);
    }
    const rest = [...left, ...right];
    run(algoOptions.visitingCallback, [...rest]);
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
