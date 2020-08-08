export function decipher(cipher: string): string {
  return String.fromCharCode(...(cipher.match(/1..|../g)?.map((c) => Number(c)) || []));
}

export function decipherV2(cipher: string): string {
  return cipher.split('').reduce(
    (a, c) => {
      a.code += c;
      const code = Number(a.code);
      if (code >= 97 && code <= 122) {
        a.result += String.fromCharCode(code);
        a.code = '';
      }
      return a;
    },
    {result: '', code: ''},
  ).result;
}
