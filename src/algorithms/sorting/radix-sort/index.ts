//https://gist.github.com/JobLeonard/eb482c82dfa0a5b78688109652ab8f68
//https://algs4.cs.princeton.edu/51radix/MSD.java.html

import {run} from '../../../helpers';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

export interface radixSortOptions<T> extends Options<T> {
  digits?: number;
  chars?: number;
}

// least significant digit radix sort
const lsdRadixSort = <T>(options?: radixSortOptions<T>): Algorithm<T> => {
  const algoOptions: radixSortOptions<T> & {digits: number; chars: number} = {
    digits: 10,
    chars: 256,
    ...options,
  };

  // get number position
  const getNumberPosition = (value: number, index: number): number => {
    return Math.floor(value / algoOptions.digits ** index) % algoOptions.digits;
  };
  // get char position
  const getCharPosition = (
    value: string,
    index: number,
    maxPasses: number,
  ): number => {
    const len = value.length;
    if (maxPasses - index > len) {
      return 0;
    }
    const charPos = index > len - 1 ? 0 : maxPasses - index - 1;
    return value.charCodeAt(charPos);
  };

  const sorter = <T>(
    array: T[],
    max: number,
    typeMax: number,
    positionCallback: (value: T, index: number, p: number) => number,
  ): T[] => {
    // place elements into buckets
    for (let i = 0; i < max; i++) {
      const buckets = Array.from({length: typeMax}, (): T[] => []);
      for (let j = 0; j < array.length; j++) {
        run(algoOptions.visitingCallback, [array[j]]);
        buckets[positionCallback(array[j], i, max)].push(array[j]);
      }
      const t: T[] = [];
      array = t.concat(...buckets);
    }
    return array;
  };

  const sortNumbers = (array: number[]): number[] => {
    // get max value in array
    const max = Math.max(...array);

    // adjust to positive numbers
    for (let i = 0; i < array.length; i++) {
      array[i] += 0x80000000;
    }

    array = sorter(array, max, algoOptions.digits, getNumberPosition);

    // adjust back to signed numbers
    for (let i = 0; i < array.length; i++) {
      array[i] -= 0x80000000;
    }

    return array;
  };

  const sortStrings = (array: string[]): string[] => {
    // get longest word length in array
    const max = array.reduce(
      (acc, val) => (val.length > acc ? val.length : acc),
      -Infinity,
    );
    return sorter(array, max, algoOptions.chars, getCharPosition);
  };

  const algoProps: AlgorithmProps<T> = {
    run: (values) => {
      let array = [...values];
      const len = array.length;
      if (len <= 1) {
        return {
          result: array,
        };
      }
      // sort based on type
      switch (typeof array[0]) {
        case 'number':
          array = (sortNumbers(
            (array as unknown) as number[],
          ) as unknown) as T[];
          break;
        case 'string':
          array = (sortStrings(
            (array as unknown) as string[],
          ) as unknown) as T[];
          break;
        default:
          break;
      }
      return {
        result: array,
      };
    },
  };

  return algorithm(algoProps);
};

export default lsdRadixSort;
