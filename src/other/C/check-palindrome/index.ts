export function checkPalindrome(inputString: string): boolean {
  for (let i = 0, j = inputString.length - 1; i <= j; i++, j--) {
    if (inputString[i] !== inputString[j]) return false;
  }
  return true;
}

export function checkPalindromeV2(inputString: string): boolean {
  return inputString == inputString.split('').reverse().join('');
}
