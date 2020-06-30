export function pairOfShoes(shoes: number[][]): boolean {
  const map: {[key: string]: number} = {};
  for (let i = 0; i < shoes.length; i++) {
    map[shoes[i][1]] = (map[shoes[i][1]] || 0) + (shoes[i][0] ? 1 : -1);
  }
  return !Object.keys(map).some((k) => map[k] !== 0);
}
