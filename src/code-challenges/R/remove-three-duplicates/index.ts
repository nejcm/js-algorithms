export function remove3Duplicates(str: string): string {
  return str.replace(/(.)\1{2,}/g, '$1$1');
}

export function remove3DuplicatesV2(str: string): string {
  let counter: {char: string; count: number} = {char: '', count: 0};
  return Array.from(str)
    .filter((char) => {
      counter = {char, count: char === counter.char ? counter.count + 1 : 1};
      return counter.count < 3;
    })
    .join('');
}

export function remove3DuplicatesV3(str: string): string {
  const len = str.length;
  const array = new Array(len);
  let lastChar;
  let count = 0;
  let arrLen = 0;

  for (let i = 0; i < len; i++) {
    const char = str[i];
    count = char === lastChar ? count + 1 : 1;
    lastChar = char;
    if (count < 3) {
      array[arrLen] = char;
      arrLen++;
    }
  }

  array.length = arrLen;
  return array.join('');
}
