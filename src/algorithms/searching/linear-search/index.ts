import {equalThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const linearSearch = <T>(options?: Options<T>): Algorithm<T> => {
  const algoOptions: Options<T> = {
    visitingCallback: () => undefined,
    compareFunction: equalThan,
    ...options,
  };

  const search = (values: T[], seek: T): number[] => {
    if (!values) return [];

    const found = [];
    // loop
    for (let i = 0; i < values.length; i++) {
      algoOptions.visitingCallback!(values[i]);
      if (algoOptions.compareFunction!(values[i], seek)) {
        // return all found instances
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
