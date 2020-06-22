export function isMAC48Address(inputString: string): boolean {
  return /^([0-9a-f]{2}-){5}([0-9a-f]{2})$/i.test(inputString);
}
