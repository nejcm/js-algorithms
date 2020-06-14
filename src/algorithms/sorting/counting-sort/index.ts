import {lessThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const countingSort = (options?: Options<number>): Algorithm<number> => {
  const algoOptions: Options<number> = {
    compareFunction: lessThan,
    ...options,
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

      const min = Math.min(...array);
      const max = Math.max(...array);

      let z = 0;
      const count = [];
      for (let i = min; i <= max; i++) {
        run(algoOptions.visitingCallback, [array[i]]);
        count[i] = 0;
      }
      for (let i = 0; i < array.length; i++) {
        run(algoOptions.visitingCallback, [array[i]]);
        count[array[i]]++;
      }
      for (let i = min; i <= max; i++) {
        while (count[i]-- > 0) {
          array[z++] = i;
        }
      }

      return {
        result: array,
      };
    },
  };

  return algorithm<number>(algoProps);
};

export default countingSort;
