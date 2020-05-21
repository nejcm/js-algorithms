import {
  equalThan,
  greaterOrEqualThan,
  greaterThan,
  lessOrEqualThan,
  lessThan,
} from './comparator';

describe('Comparator', () => {
  it('should return if numbers are lessThan', () => {
    expect(lessThan(1, 2)).toEqual(true);
    expect(lessThan(5, 3)).toEqual(false);
  });
  it('should return if strings are lessThan', () => {
    expect(lessThan('abcd', 'bcd')).toEqual(true);
    expect(lessThan('zzz', '0000')).toEqual(false);
  });
  it('should return if numbers are lessOrEqualThan', () => {
    expect(lessOrEqualThan(1, 2)).toEqual(true);
    expect(lessOrEqualThan(4, 4)).toEqual(true);
    expect(lessOrEqualThan(5, 3)).toEqual(false);
  });
  it('should return if strings are lessOrEqualThan', () => {
    expect(lessOrEqualThan('abcd', 'bcd')).toEqual(true);
    expect(lessOrEqualThan('aaa', 'aaa')).toEqual(true);
    expect(lessOrEqualThan('zzz', '0000')).toEqual(false);
  });
  it('should return if numbers are equalThan', () => {
    expect(equalThan(8, 8)).toEqual(true);
    expect(equalThan(4, 3)).toEqual(false);
  });
  it('should return if strings are equalThan', () => {
    expect(equalThan('eeee', 'eeee')).toEqual(true);
    expect(equalThan('abc', 'ab')).toEqual(false);
  });
  it('should return if numbers are greaterThan', () => {
    expect(greaterThan(2, 1)).toEqual(true);
    expect(greaterThan(3, 5)).toEqual(false);
  });
  it('should return if strings are greaterThan', () => {
    expect(greaterThan('bcd', 'abcd')).toEqual(true);
    expect(greaterThan('0000', 'zzz')).toEqual(false);
  });
  it('should return if numbers are greaterOrEqualThan', () => {
    expect(greaterOrEqualThan(2, 1)).toEqual(true);
    expect(greaterOrEqualThan(4, 4)).toEqual(true);
    expect(greaterOrEqualThan(3, 5)).toEqual(false);
  });
  it('should return if strings are greaterOrEqualThan', () => {
    expect(greaterOrEqualThan('bcd ', 'abcd')).toEqual(true);
    expect(greaterOrEqualThan('aaa', 'aaa')).toEqual(true);
    expect(greaterOrEqualThan('0000', 'zzz')).toEqual(false);
  });
});
