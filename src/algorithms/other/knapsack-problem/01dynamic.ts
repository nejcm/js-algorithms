import {Item} from './Item';

// 0/1 recursive approach
export default function knapsackProblem(items: Item[], limit: number): Item[] {
  const len = items.length;
  if (!len) return items;

  const table: number[][] = [];
  // build table from bottom up
  for (let i = 0; i <= len; i++) {
    table.push([]);
    for (let w = 0; w <= limit; w++) {
      // fill 0 for first col and row
      if (i === 0 || w === 0) table[i].push(0);
      // get max
      else if (items[i - 1].weight <= w) {
        table[i].push(
          Math.max(
            items[i - 1].value + table[i - 1][w - items[i - 1].weight],
            table[i - 1][w],
          ),
        );
      } else table[i].push(table[i - 1][w]);
    }
  }

  // get selected
  const result: Item[] = [];
  let n = len;
  let m = limit;
  while (n > 0) {
    if (table[n][m] !== table[n - 1][m]) {
      result.push(items[n - 1]);
      m = m - items[n - 1].weight;
    }
    n--;
  }

  return result;
}
