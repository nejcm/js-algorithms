export function firstDigit(inputString: string): string | undefined {
  return inputString.match(/\d/)?.shift() || '';
}

export function firstDigitV2(inputString: string): string {
  for (let i = 0; i < inputString.length; i++) {
    const num = parseInt(inputString[i], 10);
    if (num >= 0) {
      return inputString[i];
    }
  }
  return '';
}
