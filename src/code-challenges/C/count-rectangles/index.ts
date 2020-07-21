export function countRectangles(points: Point[]): number {
  let count = 0;
  const len = points.length;
  const map: {[key: string]: number} = {};

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      if (points[i].x === points[j].x && points[i].y < points[j].y) {
        const pair = `${points[i].y},${points[j].y}`;
        count += map[pair] || 0;
        map[pair] = -~map[pair];
      }
    }
  }
  return count;
}

type Point = {x: number; y: number};
