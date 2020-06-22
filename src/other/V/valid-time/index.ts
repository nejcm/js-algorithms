export function validTime(time: string): boolean {
  const s = time.split(':');
  return Number(s[0]) < 24 && Number(s[1]) < 60;
}

export function validTimeV2(time: string): boolean {
  return /^([0-1]\d|2[0-3]):[0-5]\d$/.test(time);
}

export function validTimeV3(time: string): boolean {
  return (
    new Date(`1900-01-01 ${time}`).toString() !== 'Invalid Date' &&
    time !== '24:00'
  );
}
