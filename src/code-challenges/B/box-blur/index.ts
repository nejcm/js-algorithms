export function boxBlur(image: number[][]): number[][] {
  const area = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [1, -1],
    [1, 1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  const result = Array(image.length - 2).fill(undefined);
  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[i].length - 1; j++) {
      const curr = Math.floor(
        area.reduce((acc, val) => acc + image[i - val[0]][j - val[1]], 0) / 9,
      );
      result[i - 1] = [...(result[i - 1] || []), curr];
    }
  }
  return result;
}
