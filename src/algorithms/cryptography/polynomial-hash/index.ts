export interface PolynomialHashProps {
  base?: number;
  modulus?: number;
}

export interface PolynomialHash {
  hash: (window: string) => number;
  roll: (prevHash: number, prevWindow: string, newWindow: string) => number;
}

// get char number value
function char2Number(char: string): number {
  let code = char.codePointAt(0) as number;
  const surrogate = char.codePointAt(1);
  // surrogate pair
  if (surrogate !== undefined) {
    const surrogateShift = 2 ** 16;
    code += surrogate * surrogateShift;
  }
  return code;
}

const PolynomialHash = ({
  base = 37,
  modulus = 101,
}: PolynomialHashProps = {}): PolynomialHash => {
  return {
    // calculate hash for a string
    hash: (window: string) => {
      // all character codes
      const codes = Array.from(window).map((char) => char2Number(char));

      let hash = 0;
      // calculate hash
      for (let i = 0; i < codes.length; i += 1) {
        hash *= base;
        hash += codes[i];
        hash %= modulus;
      }
      return hash;
    },
    // calculate hash based on previous string value
    roll(prevHash: number, prevWindow: string, newWindow: string): number {
      let hash = prevHash;

      const prevValue = char2Number(prevWindow[0]);
      const newValue = char2Number(newWindow[newWindow.length - 1]);

      let multiplier = 1;
      for (let i = 1; i < prevWindow.length; i += 1) {
        multiplier *= base;
        multiplier %= modulus;
      }

      hash += modulus;
      hash -= (prevValue * multiplier) % modulus;
      hash *= base;
      hash += newValue;
      hash %= modulus;

      return hash;
    },
  };
};

export default PolynomialHash;
