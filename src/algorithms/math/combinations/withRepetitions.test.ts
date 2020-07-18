import combinations from './withRepetitions';

describe('CombinationsWithRepetitions', () => {
  it('should return all combination with repetitions', () => {
    expect(combinations([], 2)).toBeUndefined();
    expect(combinations(['B'], 0)).toBeUndefined();

    expect(combinations(['A'], 1)).toEqual([['A']]);

    expect(combinations(['A', 'B'])).toEqual([['A'], ['B']]);

    expect(combinations(['A', 'B'], 2)).toEqual([
      ['A', 'A'],
      ['A', 'B'],
      ['B', 'B'],
    ]);

    expect(combinations(['A', 'B'], 3)).toEqual([
      ['A', 'A', 'A'],
      ['A', 'A', 'B'],
      ['A', 'B', 'B'],
      ['B', 'B', 'B'],
    ]);

    expect(combinations(['A', 'B', 'C'], 2)).toEqual([
      ['A', 'A'],
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'B'],
      ['B', 'C'],
      ['C', 'C'],
    ]);

    expect(combinations(['A', 'B', 'C'], 3)).toEqual([
      ['A', 'A', 'A'],
      ['A', 'A', 'B'],
      ['A', 'A', 'C'],
      ['A', 'B', 'B'],
      ['A', 'B', 'C'],
      ['A', 'C', 'C'],
      ['B', 'B', 'B'],
      ['B', 'B', 'C'],
      ['B', 'C', 'C'],
      ['C', 'C', 'C'],
    ]);

    expect(combinations([0], 2)).toEqual([[0, 0]]);
  });
});
