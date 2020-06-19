export function commonCharacterCount(s1: string, s2: string): number {
  const str1 = [...s1];
  const str2 = [...s2];
  return str1.reduce((acc, char) => {
    const i = str2.findIndex((c) => char === c);
    if (i >= 0) {
      acc++;
      delete str2[i];
    }
    return acc;
  }, 0);
}

export function commonCharacterCountV2(s1: string, s2: string): number {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '!');
  }
  return s2.replace(/[^!]/g, '').length;
}
