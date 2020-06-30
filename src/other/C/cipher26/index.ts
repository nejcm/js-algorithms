export function cipher26(message: string): string {
  let sum = 0;
  return message
    .split('')
    .map((x) => {
      const cc = (x.charCodeAt(0) - 97 - sum + 26) % 26;
      sum = (sum + cc) % 26;
      return String.fromCharCode(cc + 97);
    })
    .join('');
}
