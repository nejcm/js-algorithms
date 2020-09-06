import {equalThan, lessThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

export enum PivotMode {
  First = 0,
  Middle = 1,
  Last = 2,
}

export interface QuickSortOptions<T> extends Options<T> {
  pivot?: PivotMode;
}

// get pivot function
const getPivotFunction = <T>(option?: PivotMode): ((array: T[]) => T) => {
  switch (option || 0) {
    case PivotMode.Middle:
      return (array: T[]): T => {
        const index = Math.floor(array.length / 2);
        const element = array[index];
        array.splice(index, 1);
        return element as T;
      };
    case PivotMode.Last:
      return (array: T[]): T => array.pop() as T;
    default:
      return (array: T[]): T => array.shift() as T;
  }
};

const quickSort = <T>(options?: QuickSortOptions<T>): Algorithm<T> => {
  const algoOptions: QuickSortOptions<T> & {getPivot: (array: T[]) => T} = {
    visitingCallback: () => undefined,
    compareFunction: lessThan,
    ...options,
    // Last as we do not allow overriding this prop
    getPivot: getPivotFunction<T>(options?.pivot),
  };

  function sort(array: T[]): T[] {
    const len = array.length;
    if (len <= 1) return array;

    const lArray = [];
    const rArray = [];
    const pivot = algoOptions.getPivot(array);
    const cArray = [pivot];
    // split array based on a pivot
    for (let i = 0; i < len - 1; i++) {
      algoOptions.visitingCallback!(array[i]);
      if (equalThan(array[i], pivot)) {
        cArray.push(array[i]);
      } else if (algoOptions.compareFunction!(array[i], pivot)) {
        lArray.push(array[i]);
      } else {
        rArray.push(array[i]);
      }
    }

    // sort arrays and merge them
    return [...sort(lArray), ...cArray, ...sort(rArray)];
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

export default quickSort;
