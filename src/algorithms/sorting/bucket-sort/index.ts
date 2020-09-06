import {getMinMax} from '../../../helpers';
import {lessThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

export interface bucketSortOptions extends Options<number> {
  bucketSize?: number;
}

const bucketSort = (options?: bucketSortOptions): Algorithm<number> => {
  const algoOptions: bucketSortOptions & {bucketSize: number} = {
    visitingCallback: () => undefined,
    compareFunction: lessThan,
    bucketSize: 1,
    ...options,
  };

  const sort = (array: number[]): number[] => {
    const len = array.length;
    // get min and max of array
    const [min, max] = getMinMax(array);
    // calculate number of buckets
    const bucketCount = Math.floor((max - min) / algoOptions.bucketSize) + 1;
    const buckets = Array.from({length: bucketCount}, (): number[] => []);

    // put elements into buckets
    for (let i = 0; i < len; i++) {
      algoOptions.visitingCallback!(array[i]);
      buckets[Math.floor((array[i] - min) / algoOptions.bucketSize)].push(array[i]);
    }
    // sort each bucket
    for (let i = 0; i < bucketCount; i++) {
      buckets[i].sort();
    }
    const r: number[] = [];
    // merge buckets into sorted array
    return r.concat(...buckets);
  };

  const algoProps: AlgorithmProps<number> = {
    run: (values) => {
      const array = [...values];
      const len = array.length;
      if (len <= 1) {
        return {
          result: values,
        };
      }

      let positive = [];
      let negative = [];
      // split into negative and positive numbers
      for (let i = 0; i < len; i++) {
        if (array[i] < 0) {
          negative.push(-1 * array[i]);
        } else {
          positive.push(array[i]);
        }
      }
      // sort both
      negative = sort(negative);
      positive = sort(positive);

      // merge arrays
      // convert negative numbers
      for (let i = 0; i < negative.length; i++) {
        array[i] = -1 * negative[negative.length - 1 - i];
      }
      for (let j = negative.length; j < len; j++) {
        array[j] = positive[j - negative.length];
      }

      return {
        result: array,
      };
    },
  };

  return algorithm(algoProps);
};

export default bucketSort;
