import {equalThan} from '../../../helpers/comparator';
import algorithm, {Algorithm, AlgorithmProps, Options} from '../Algorithm';

const zAlgorithm = (options?: Options): Algorithm => {
  const algoOptions: Options = {
    compareFunction: equalThan,
    separator: '¬', // least used character
    ...options,
  };

  // build z array
  const buildZArray = (zString: string): number[] => {
    const n = zString.length;
    const zArray: number[] = [0];
    let left = 0;
    let right = 0;

    // loop string
    for (let i = 1; i < n; i++) {
      // if i > right nothing matches so we will
      // calculate zArray[i] using naive way.
      if (i > right) {
        right = i;
        left = i;

        // right-left = 0 in starting, so it will start
        // checking from 0'th index. For example,
        // for "ababab" and i = 1, the value of right
        // remains 0 and zArray[i] becomes 0. For string
        // "aaaaaa" and i = 1, zArray[i] and right becomes 5
        while (right < n && zString[right - left] === zString[right]) {
          // expand z box right boundry
          right++;
        }

        zArray.push(right - left);
        right--;
      } else {
        // k = i-left so k corresponds to number
        // which matches in [left,right] interval.
        const k = i - left;

        // if zArray[k] is less than remaining interval
        // then zArray[i] will be equal to zArray[k].
        // For example, str = "ababab", i = 3,
        // right = 5 and left = 2
        if (zArray[k] < right - i + 1) {
          zArray.push(zArray[k]);
        }
        // For example str = "aaaaaa" and
        // i = 2, right is 5, left is 0
        else {
          // else start from right and
          // check manually
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
    if (!text || !seek) return -1;
    const n = text.length;
    const m = seek.length;
    if (n === 0 || m === 0 || m > n) return -1;

    const zString = `${seek}${algoOptions.separator}${text}`;
    const zArray = buildZArray(zString);
    for (let i = 1; i < zArray.length; i += 1) {
      if (zArray[i] === m) {
        // match found
        // return only the first occurance
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
