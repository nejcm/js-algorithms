export function sherlockAndAnagrams(s: string): number {
  const getSubstrings = (str: string): string[] => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j));
      }
    }
    return result;
  };

  const isAnagram = (str1: string, str2: string): boolean => {
    const hist: {[key: string]: number} = {};
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      if (hist[char]) hist[char]++;
      else hist[char] = 1;
    }
    for (let j = 0; j < str2.length; j++) {
      const char = str2[j];
      if (hist[char]) hist[char]--;
      else return false;
    }
    return true;
  };

  const countAnagrams = (index: number, arr: string[]): number => {
    const curr = arr[index];
    const rest = arr.slice(index + 1);
    let counter = 0;

    for (let i = 0; i < rest.length; i++) {
      if (curr.length === rest[i].length && isAnagram(curr, rest[i])) {
        counter++;
      }
    }
    return counter;
  };

  const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length;
  if (!duplicatesCount) return 0;
  let anagramsCount = 0;
  const arr = getSubstrings(s);
  for (let i = 0; i < arr.length; i++) {
    anagramsCount += countAnagrams(i, arr);
  }
  return anagramsCount;
}
