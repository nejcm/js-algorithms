export function reflectString(inputString: string): string {
  return inputString
    .split('')
    .map((c) => String.fromCharCode(219 - c.charCodeAt(0)))
    .join('');
}
