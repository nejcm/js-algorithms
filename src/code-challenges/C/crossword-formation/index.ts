/* eslint-disable max-depth */
/* eslint-disable complexity */
export function crosswordFormation(words: string[]): number {
  let count = 0;
  // loop all
  for (let i = 0; i < 4; i++) {
    // loop first
    for (let w1 = 0; w1 < words[i].length - 1; w1++) {
      // loop all
      for (let j = 0; j < 4; j++) {
        // not same as first
        if (j === i) continue;
        // loop second
        for (let w2 = 1; w2 < words[j].length; w2++) {
          // chars not equal
          if (words[i][w1] !== words[j][w2]) continue;

          for (let b1 = 0; b1 < w2 - 1; b1++) {
            // loop all
            for (let k = 0; k < 4; k++) {
              // not same as first and second
              if (k === i || k === j) continue;

              if (w2 - b1 >= words[6 - i - j - k].length) continue;

              for (let c1 = 0; c1 < words[k].length - 1; c1++) {
                // chars not equal
                if (words[k][c1] !== words[j][b1]) continue;

                for (let c2 = c1 + 2; c2 < words[k].length; c2++) {
                  const a2 = w1 + (c2 - c1);
                  // does not fit
                  if (a2 >= words[i].length) continue;
                  for (let d1 = 0; d1 < words[6 - i - j - k].length; d1++) {
                    if (words[6 - i - j - k][d1] !== words[k][c2]) continue;
                    const d2 = d1 + (w2 - b1);
                    if (d2 >= words[6 - i - j - k].length) break;
                    if (words[i][a2] !== words[6 - i - j - k][d2]) continue;
                    count++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
}
