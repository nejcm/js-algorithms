export function isSubstitutionCipher(string1: string, string2: string): boolean {
  return [...string1].every(
    (_c, i) => string1.indexOf(string1[i]) === string2.indexOf(string2[i]),
  );
}
