export function longestDigitsPrefix(inputString: string): string | undefined {
  return inputString.match(/\[0-9]+/)?.shift() || '';
}
