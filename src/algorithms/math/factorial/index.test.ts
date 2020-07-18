import factorial from './';

describe('Factorial', () => {
  it('should return factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
    expect(factorial(8)).toBe(40320);
    expect(factorial(10)).toBe(3628800);
  });
});
