export function alphabeticShift(inputString: string): string {
  return inputString
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0) + 1;
      return String.fromCharCode(code > 122 ? 97 : code);
    })
    .join('');
}

export function alphabeticShiftV2(inputString: string): string {
  const c = 'abcdefghijklmnopqrstuvwxyza';
  return inputString.replace(/./g, (x) => c[c.indexOf(x) + 1]);
}
