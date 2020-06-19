export function reverseInParentheses(inputString: string): string {
  let str = inputString;
  while (str) {
    const last = str.indexOf(')');
    if (last === -1) break;

    const first = str.substring(0, last).lastIndexOf('(');
    const start = str.substring(0, first);
    const middle = str
      .substring(first + 1, last)
      .split('')
      .reverse()
      .join('');
    const end = str.substring(last + 1, str.length);
    str = start + middle + end;
  }
  return str;
}

export function reverseInParenthesesV2(inputString: string): string {
  while (inputString.includes('(')) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join(''),
    );
  }
  return inputString;
}
