import {findAllNearby, run} from '../../../helpers';
import {equalThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const binarySearch = (options?: Options<number>): Algorithm<number> => {
  const algoOptions = {
    compareFunction: equalThan,
    ...options,
  };

  const search = (values: number[], seek: number): number[] => {
    if (!values) {
      return [];
    }
    let start = 0;
    let end = values.length - 1;

    // split array until they meet and can not be split anymore
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      // check if we found a match
      // otherwise find out which half should be searched next
      if (run(algoOptions.compareFunction, [values[mid], seek])) {
        return findAllNearby(values, seek, mid, algoOptions.compareFunction);
      } else if (values[mid] < seek) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return [];
  };

  const algoProps: AlgorithmProps<number> = {
    run: (values, seek) => {
      const result = search(values, seek);
      return {
        result,
      };
    },
  };

  return algorithm(algoProps);
};

export default binarySearch;
