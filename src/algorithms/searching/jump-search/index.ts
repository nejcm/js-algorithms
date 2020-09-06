import {findAllNearby} from '../../../helpers';
import {equalThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const jumpSearch = (options?: Options<number>): Algorithm<number> => {
  const algoOptions = {
    compareFunction: equalThan,
    ...options,
  };

  const search = (values: number[], seek: number): number[] => {
    if (!values) return [];

    const len = values.length;
    const step = Math.floor(Math.sqrt(len));
    let current = step - 1;
    // finding the block where element is present
    while (current < len && values[current] < seek) {
      current += step;
    }
    // find seeked element inside block using linear search
    for (let i = current - step + 1; i <= current && i < len; i++) {
      if (seek == values[i]) {
        return findAllNearby(values, seek, i, algoOptions.compareFunction);
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
