import {equalThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const linearSearch = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    compareFunction: equalThan,
    ...options,
  };

  const search = (values: T[], seek: T): number[] => {
    if (!values) {
      return [];
    }
    const found = [];
    for (let i = 0; i < values.length; i++) {
      run(algoOptions.visitingCallback, [values[i]]);
      if (run(algoOptions.compareFunction, [values[i], seek])) {
        found.push(i);
      }
    }
    return found;
  };

  const algoProps: AlgorithmProps<T> = {
    run: (values, seek) => {
      const result = search(values, seek);
      return {
        result,
      };
    },
  };

  return algorithm(algoProps);
};

export default linearSearch;
