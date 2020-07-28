import {Item} from './Item';

type KnapsackProblem = (items: Item[], limit: number, fractions?: boolean) => Item[];

const getTotals = (items: Item[]) =>
  items.reduce(
    (ac, item) => {
      ac.weight += item.weight;
      ac.value += item.value;
      return ac;
    },
    {weight: 0, value: 0},
  );

const Tester = {
  testEmpty: (knapsack: KnapsackProblem): void => {
    expect(knapsack([], 10)).toEqual([]);
  },

  testImpossible: (knapsack: KnapsackProblem): void => {
    expect(knapsack([], 10)).toEqual([]);

    const items: Item[] = [
      {key: 'A', weight: 40, value: 30},
      {key: 'B', weight: 30, value: 40},
      {key: 'C', weight: 50, value: 60},
      {key: 'D', weight: 11, value: 20},
    ];
    expect(knapsack(items, 10)).toEqual([]);
  },

  testEqualWeight: (knapsack: KnapsackProblem): void => {
    expect(knapsack([], 10)).toEqual([]);

    const items: Item[] = [
      {key: 'A', weight: 1, value: 5},
      {key: 'B', weight: 1, value: 7},
      {key: 'C', weight: 1, value: 2},
      {key: 'D', weight: 1, value: 3},
    ];
    const result = knapsack(items, 3);
    expect(result.length).toBe(3);
    const totals = getTotals(result);
    expect(totals.value).toBe(15);
    expect(totals.weight).toBe(3);
    expect(result.some((item) => item.key === 'A')).toBeTruthy();
    expect(result.some((item) => item.key === 'B')).toBeTruthy();
    expect(result.some((item) => item.key === 'D')).toBeTruthy();
  },

  testWithDifferentOrder: (knapsack: KnapsackProblem): void => {
    let items: Item[] = [
      {key: 'A', weight: 1, value: 1},
      {key: 'B', weight: 3, value: 2},
      {key: 'C', weight: 4, value: 4},
      {key: 'D', weight: 6, value: 7},
    ];
    const result = knapsack(items, 7);
    expect(result.length).toBe(2);
    const totals = getTotals(result);
    expect(totals.value).toBe(8);
    expect(totals.weight).toBe(7);
    expect(result.some((item) => item.key === 'A')).toBeTruthy();
    expect(result.some((item) => item.key === 'D')).toBeTruthy();

    items = [
      {key: 'D', weight: 6, value: 7},
      {key: 'A', weight: 1, value: 1},
      {key: 'B', weight: 3, value: 2},
      {key: 'C', weight: 4, value: 4},
    ];
    const result2 = knapsack(items, 7);
    expect(result2.some((item) => item.key === 'A')).toBeTruthy();
    expect(result2.some((item) => item.key === 'D')).toBeTruthy();
  },

  test: (knapsack: KnapsackProblem): void => {
    const items: Item[] = [
      {key: 'A', weight: 6, value: 90},
      {key: 'B', weight: 2, value: 9},
      {key: 'C', weight: 3, value: 15},
      {key: 'D', weight: 1, value: 11},
      {key: 'E', weight: 2, value: 22},
    ];
    const result = knapsack(items, 14);
    expect(result.length).toBe(5);
    const totals = getTotals(result);
    expect(totals.value).toBe(90 + 22 + 11 + 15 + 9); // 147
    expect(totals.weight).toBe(14);
  },

  test2: (knapsack: KnapsackProblem): void => {
    const items: Item[] = [
      {key: 'A', weight: 6, value: 90},
      {key: 'B', weight: 2, value: 9},
      {key: 'C', weight: 3, value: 15},
      {key: 'D', weight: 1, value: 11},
      {key: 'E', weight: 2, value: 22},
    ];
    const result = knapsack(items, 10);
    expect(result.length).toBe(3);
    const totals = getTotals(result);
    expect(totals.value).toBe(90 + 22 + 11); // 123
    expect(totals.weight).toBe(9);
  },

  test3: (knapsack: KnapsackProblem): void => {
    const items: Item[] = [
      {key: 'A', weight: 6, value: 90},
      {key: 'B', weight: 2, value: 9},
      {key: 'C', weight: 3, value: 15},
      {key: 'D', weight: 1, value: 11},
      {key: 'E', weight: 2, value: 22},
    ];
    const result = knapsack(items, 5);
    expect(result.length).toBe(3);
    const totals = getTotals(result);
    expect(totals.value).toBe(22 + 11 + 9); // 42
    expect(totals.weight).toBe(5);
  },

  testFractions: (knapsack: KnapsackProblem): void => {
    const items: Item[] = [
      {key: 'A', weight: 1, value: 1}, // ratio: 1
      {key: 'B', weight: 3, value: 4}, // ratio: 1.33
      {key: 'C', weight: 4, value: 5}, // ratio: 1.25
      {key: 'D', weight: 5, value: 7}, // ratio: 1.4
    ];
    const result = knapsack(items, 7, true);
    expect(result.length).toBe(2);
    const totals = getTotals(result);
    const value = (2 / 3) * items[1].value;
    expect(totals.value).toBe(7 + value);
    expect(totals.weight).toBe(7);
    expect(result.find((item) => item.key === 'B')).toEqual({
      ...items[1],
      weight: 2,
      value,
    });
  },

  test01: (knapsack: KnapsackProblem): void => {
    const items: Item[] = [
      {key: 'A', weight: 1, value: 1},
      {key: 'B', weight: 3, value: 4},
      {key: 'C', weight: 4, value: 5},
      {key: 'D', weight: 5, value: 7},
    ];
    const result = knapsack(items, 7);
    expect(result.length).toBe(2);
    const totals = getTotals(result);
    expect(totals.value).toBe(9);
    expect(totals.weight).toBe(7);
  },

  test012: (knapsack: KnapsackProblem): void => {
    const items: Item[] = [
      {key: 'A', weight: 10, value: 60},
      {key: 'B', weight: 20, value: 100},
      {key: 'C', weight: 30, value: 120},
    ];
    const result = knapsack(items, 50);
    expect(result.length).toBe(2);
    const totals = getTotals(result);
    expect(totals.value).toBe(120 + 100);
    expect(totals.weight).toBe(50);
  },
};

export default Tester;
