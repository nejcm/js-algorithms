export function messageFromBinaryCode(code: string): string {
  let msg = '';
  for (let i = 0; i < code.length; i = i + 8) {
    msg += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
  }
  return msg;
}

export function messageFromBinaryCodeV2(code: string): string {
  return (
    code
      .match(/.{8}/g)
      ?.reduce((a, b) => a + String.fromCharCode(parseInt(b, 2)), '') || ''
  );
}

export function messageFromBinaryCodeV3(code: string): string {
  return code.replace(/[01]{8}/g, (byte) =>
    String.fromCharCode(parseInt(byte, 2)),
  );
}
