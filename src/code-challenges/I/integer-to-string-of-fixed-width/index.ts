export function integerToStringOfFixedWidth(number: number, width: number): string {
  return `${number}`.padStart(width, '0').slice(-width);
}

export function integerToStringOfFixedWidthV2(number: number, width: number): string {
  return ('0'.repeat(5) + number).slice(-width);
}
