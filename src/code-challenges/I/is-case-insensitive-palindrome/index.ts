export function isCaseInsensitivePalindrome(inputString: string): boolean {
  for (let i = 0, j = inputString.length - 1; i <= j; i++, j--) {
    if (inputString[i].toLowerCase() !== inputString[j].toLowerCase()) return false;
  }
  return true;
}

export function isCaseInsensitivePalindromeV2(inputString: string): boolean {
  return inputString.toLowerCase() === [...inputString].reverse().join('').toLowerCase();
}
