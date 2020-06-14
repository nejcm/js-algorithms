import {equalThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const jumpSearch = (options?: Options<number>): Algorithm<number> => {
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
    const len = values.length;
    const step = Math.floor(Math.sqrt(len));
    let current = step - 1;

    // Finding the block where element is present
    while (current < len && values[current] < seek) {
      current += step;
    }
    // Find seeked element inside block using linear search
    for (let i = current - step + 1; i <= current && i < len; i++) {
      if (seek == values[i]) {
        return findAll(values, seek, i);
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

export default jumpSearch;
