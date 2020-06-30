export function stolenLunch(note: string): string {
  return note.replace(
    /[0-9a-j]/g,
    (c) => '0123456789abcdefghij'['abcdefghij0123456789'.indexOf(c)],
  );
}

export function stolenLunchV2(note: string): string {
  return note
    .split('')
    .map((c) => {
      if (c >= 'a' && c <= 'j') c = (c.charCodeAt(0) - 97).toString();
      else if (c >= '0' && c <= '9') c = String.fromCharCode(Number(c) + 97);
      return c;
    })
    .join('');
}
