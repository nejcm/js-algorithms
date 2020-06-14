import {equalThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const interpolationSearch = (options?: Options<number>): Algorithm<number> => {
  const algoOptions: Options<number> = {
    compareFunction: equalThan,
    ...options,
  };

  // Find all matching elements nearby
  const findAll = (values: number[], seek: number, mid: number): number[] => {
    const found = [mid];
    // Find left of current
    let l = mid - 1;
    while (l >= 0 && run(algoOptions.compareFunction, [values[l], seek])) {
      found.unshift(l);
      l--;
    }
    // Find right of current
    let r = mid + 1;
    while (
      r < values.length &&
      run(algoOptions.compareFunction, [values[r], seek])
    ) {
      found.push(r);
      r++;
    }
    return found;
  };

  const search = (values: number[], seek: number): number[] => {
    if (!values) {
      return [];
    }
    let start = 0;
    let end = values.length - 1;

    while (start <= end && seek >= values[start] && seek <= values[end]) {
      if (start === end) {
        if (run(algoOptions.compareFunction, [values[start], seek])) {
          return findAll(values, seek, start);
        }
        return [];
      }

      const pos = Math.floor(
        start +
          ((end - start) / (values[end] - values[start])) *
            (seek - values[start]),
      );
      if (run(algoOptions.compareFunction, [values[pos], seek])) {
        return findAll(values, seek, pos);
      }
      if (values[pos] < seek) {
        start = pos + 1;
      } else {
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
