export function addBorder(picture: string[]): string[] {
  const outer = '*'.repeat(picture[0].length + 2);
  return [outer, ...picture.map((str) => `*${str}*`), outer];
}

export function addBorderV2(picture: string[]): string[] {
  let arr = [...picture];

  const outer = '*'.repeat(arr[0].length + 2);
  arr = arr.map((str) => `*${str}*`);
  arr.push(outer);
  arr.unshift(outer);
  return arr;
}

export function addBorderV3(picture: string[]): string[] {
  let e;
  return [(e = '*'.repeat(p[0].length + 2))].concat(
    picture.map((i) => `*${i}*`),
    e,
  );
}
