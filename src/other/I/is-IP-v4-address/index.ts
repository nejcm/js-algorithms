export function isIPv4Address(inputString: string): boolean {
  return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
    inputString,
  );
}

export function isIPv4AddressV2(inputString: string): boolean {
  const r = inputString.split('.');
  return (
    r.length === 4 &&
    r.every((x) => x != '' && parseInt(x, 10) >= 0 && parseInt(x, 10) < 256)
  );
}
