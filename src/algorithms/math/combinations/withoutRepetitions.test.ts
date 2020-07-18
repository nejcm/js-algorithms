import combinations from './withoutRepetitions';

describe('CombinationsWithoutRepetitions', () => {
  it('should return all combination with repetitions', () => {
    expect(combinations([], 2)).toBeUndefined();
    expect(combinations(['B'], 0)).toBeUndefined();

    expect(combinations(['A', 'B'], 3)).toEqual([]);

    expect(combinations(['A', 'B'], 1)).toEqual([['A'], ['B']]);

    expect(combinations(['A'])).toEqual([['A']]);

    expect(combinations(['A', 'B'], 2)).toEqual([['A', 'B']]);

    expect(combinations(['A', 'B', 'C'], 2)).toEqual([
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
    ]);

    expect(combinations(['A', 'B', 'C'], 3)).toEqual([['A', 'B', 'C']]);

    expect(combinations(['A', 'B', 'C', 'D'], 3)).toEqual([
      ['A', 'B', 'C'],
      ['A', 'B', 'D'],
      ['A', 'C', 'D'],
      ['B', 'C', 'D'],
    ]);

    expect(combinations(['A', 'B', 'C', 'D', 'E'], 3)).toEqual([
      ['A', 'B', 'C'],
      ['A', 'B', 'D'],
      ['A', 'B', 'E'],
      ['A', 'C', 'D'],
      ['A', 'C', 'E'],
      ['A', 'D', 'E'],
      ['B', 'C', 'D'],
      ['B', 'C', 'E'],
      ['B', 'D', 'E'],
      ['C', 'D', 'E'],
    ]);

    expect(combinations([0], 2)).toEqual([]);
  });
});
