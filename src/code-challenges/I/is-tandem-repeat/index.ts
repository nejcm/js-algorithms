export function isTandemRepeat(inputString: string): boolean {
  return /^(\w+)\1$/.test(inputString);
}

export function isTandemRepeatV2(inputString: string): boolean {
  const middle = inputString.length / 2;
  return inputString.slice(0, middle) == inputString.slice(middle);
}

export function isTandemRepeatV3(inputString: string): boolean {
  const len = inputString.length;
  return (
    len % 2 === 0 &&
    inputString.substring(0, len / 2) === inputString.substring(len / 2, len)
  );
}
