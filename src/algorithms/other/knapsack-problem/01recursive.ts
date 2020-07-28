import {Item} from './Item';

type Result = [number, Item[]];

// 0/1 recursive approach
export default function knapsackProblem(items: Item[], limit: number): Item[] {
  if (!items.length) return items;

  const memo = new Map<string, Result>();

  const solve = (i: number, remaining: number): Result => {
    const key = `${i},${remaining}`;
    // return cached result if exists
    if (memo.has(key)) return memo.get(key) as Result;
    // base case
    if (i === 0 || remaining === 0) return [0, []];

    // if current item weight is more than it is left
    // than skip it
    if (items[i - 1].weight > remaining) return solve(i - 1, remaining);

    // copy current item
    const current = {...items[i - 1]};

    // return the maximum of two cases
    // nth item not included
    const result1 = solve(i - 1, remaining);
    // nth item included
    // add current item value to value sum
    const result2 = solve(i - 1, remaining - current.weight);
    result2[0] += current.value;
    result2[1].push(current);

    // get max
    const tmp = result1[0] > result2[0] ? result1 : result2;
    memo.set(key, [tmp[0], [...tmp[1]]]);
    return [tmp[0], [...tmp[1]]];
  };

  const result = solve(items.length, limit);
  return result[1];
}
