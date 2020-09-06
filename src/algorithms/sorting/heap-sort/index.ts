import createHeap from '../../../data-structures/heap';
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
    if (len <= 1) {
      return array;
    }

    const sorted = [];
    const minHeap = createHeap(algoOptions as Options<T>);

    // add all elements to the heap
    array.forEach((element) => {
      minHeap.add(element);
    });

    // shift elements from min heap
    while (!minHeap.isEmpty()) {
      const element = minHeap.shift() as T;
      algoOptions.visitingCallback!(element);
      sorted.push(element);
    }
    return sorted;
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
