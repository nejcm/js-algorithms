import {equalThan} from '../../../helpers/comparator';
import {run} from '../../../helpers/function';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const knuthMorrisPratt = (options?: Options): Algorithm => {
  const algoOptions: Options = {
    compareFunction: equalThan,
    ...options,
  };

  const buildPatternTable = (seek: string): number[] => {
    const table = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < seek.length) {
      if (seek[prefixIndex] === seek[suffixIndex]) {
        table[suffixIndex] = prefixIndex + 1;
        suffixIndex++;
        prefixIndex++;
      } else if (prefixIndex === 0) {
        table[suffixIndex] = 0;
        suffixIndex++;
      } else {
        prefixIndex = table[prefixIndex - 1];
      }
    }

    return table;
  };

  const search = (text: string, seek: string): number | null => {
    if (!text || !seek) {
      return -1;
    }

    const n = text.length;
    const m = seek.length;
    if (n === 0 || m === 0 || m > n) {
      return -1;
    }

    let textIndex = 0;
    let seekIndex = 0;
    const patternTable = buildPatternTable(seek);

    while (textIndex < n) {
      if (
        run(algoOptions.compareFunction, [text[textIndex], seek[seekIndex]])
      ) {
        if (seekIndex === m - 1) {
          return textIndex - m + 1;
        }
        seekIndex++;
        textIndex++;
      } else if (seekIndex > 0) {
        seekIndex = patternTable[seekIndex - 1];
      } else {
        seekIndex = 0;
        textIndex++;
      }
    }

    return -1;
  };

  const algoProps: AlgorithmProps = {
    run: (value, seek) => {
      const result = search(value, seek);
      return {
        result,
      };
    },
  };

  return algorithm(algoProps);
};

export default knuthMorrisPratt;
