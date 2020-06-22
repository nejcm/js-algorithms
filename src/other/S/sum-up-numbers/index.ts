export function sumUpNumbers(inputString: string): number {
  return (
    inputString.match(/([0-9]+)/gi)?.reduce((a, c) => a + parseInt(c, 10), 0) ||
    0
  );
}
