import {getMinMax} from '../../../helpers';
import {lessThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const countingSort = (options?: Options<number>): Algorithm<number> => {
  const algoOptions: Options<number> = {
    visitingCallback: () => undefined,
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

      // get min and max of array
      const [min, max] = getMinMax(array);
      const count = [];
      // fill count array with 0
      for (let i = min; i <= max; i++) {
        algoOptions.visitingCallback!(array[i]);
        count[i] = 0;
      }
      // store count of each character
      for (let i = 0; i < array.length; i++) {
        algoOptions.visitingCallback!(array[i]);
        count[array[i]]++;
      }
      let z = 0;
      // fill array with sorted elements
      for (let i = min; i <= max; i++) {
        while (count[i]-- > 0) {
          array[z] = i;
          z++;
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
