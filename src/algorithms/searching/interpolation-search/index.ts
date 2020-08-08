import {findAllNearby, run} from '../../../helpers';
import {equalThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const interpolationSearch = (options?: Options<number>): Algorithm<number> => {
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

    // loop between
    while (start <= end && seek >= values[start] && seek <= values[end]) {
      // interpolation of the middle index.
      let pos = Math.floor(
        start + ((end - start) / (values[end] - values[start])) * (seek - values[start]),
      );

      // if all elements are same then we'll have divide by 0 or 0/0
      // which may cause NaN
      pos = Number.isNaN(pos) ? start : pos;

      if (run(algoOptions.compareFunction, [values[pos], seek])) {
        // match found
        return findAllNearby(values, seek, pos, algoOptions.compareFunction);
      }

      // check which half to continue searching
      if (values[pos] < seek) {
        // right
        start = pos + 1;
      } else {
        // left
        end = pos - 1;
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

export default interpolationSearch;
