import polyHasher from './index';

describe('PolynomialHash', () => {
  it('should calculate correct hash value', () => {
    const hasher = polyHasher();
    const seek = 'seek text';
    const notEqual = 'aseek tex';
    const equal = 'seek text';
    const textWithSurrogatePair = '🌐seek tex';

    const seekHash = hasher.hash(seek);
    const seekHashNotEqual = hasher.hash(notEqual);
    const seekHashEqual = hasher.hash(equal);
    const seekHashRollEqual = hasher.roll(seekHashNotEqual, notEqual, equal);
    const seekHashEqualSurrogate = hasher.hash(textWithSurrogatePair);
    const seekHashRollSurrogateEqual = hasher.roll(
      seekHashEqualSurrogate,
      textWithSurrogatePair,
      equal,
    );

    expect(seekHash).toBeDefined();
    expect(seekHash).not.toEqual(seekHashNotEqual);
    expect(seekHash).toEqual(seekHashEqual);
    expect(seekHash).toEqual(seekHashRollEqual);
    expect(seekHash).toEqual(seekHashRollSurrogateEqual);
  });
});
