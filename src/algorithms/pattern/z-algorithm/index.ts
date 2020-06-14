import {equalThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const zAlgorithm = (options?: Options): Algorithm => {
  const algoOptions: Options = {
    compareFunction: equalThan,
    separator: '¬',
    ...options,
  };

  const buildZArray = (zString: string): number[] => {
    const n = zString.length;
    const zArray: number[] = [0];
    let left = 0;
    let right = 0;

    for (let i = 1; i < n; i++) {
      if (i > right) {
        right = i;
        left = i;

        while (right < n && zString[right - left] === zString[right]) {
          right++;
        }

        zArray.push(right - left);
        right--;
      } else {
        const k = i - left;

        if (zArray[k] < right - i + 1) {
          zArray.push(zArray[k]);
        } else {
          left = i;
          while (right < n && zString[right - left] === zString[right]) {
            right++;
          }

          zArray.push(right - left);
          right--;
        }
      }
    }
    return zArray;
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

    const zString = `${seek}${algoOptions.separator}${text}`;
    const zArray = buildZArray(zString);

    for (let i = 1; i < zArray.length; i += 1) {
      if (zArray[i] === m) {
        // Return only the first occurance
        return i - m - (algoOptions.separator as string).length;
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

export default zAlgorithm;
