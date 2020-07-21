export function largestRectangleArea(heights: number[]): number {
  if (!heights || !heights.length) return 0;

  const len = heights.length;
  const stack: number[] = [];
  let max = 0;
  for (let i = 0; i <= len; i++) {
    const h = i === len ? 0 : heights[i];
    if (!stack.length || h >= heights[stack[0]]) stack.unshift(i);
    else {
      const top = stack.shift() as number;
      max = Math.max(max, heights[top] * (!stack.length ? i : i - 1 - stack[0]));
      i--;
    }
  }
  return max;
}

export function largestRectangleAreaV2(heights: number[]): number {
  if (!heights || !heights.length) return 0;

  const stack: number[] = [];
  let max = 0;
  let top, topArea;

  const len = heights.length;
  let i = 0;
  while (i < len) {
    if (!stack.length || heights[stack[0]] <= heights[i]) stack.unshift(i++);
    else {
      top = stack.shift() as number;
      topArea = heights[top] * (!stack.length ? i : i - stack[0] - 1);
      if (max < topArea) max = topArea;
    }
  }

  while (stack.length) {
    top = stack.shift() as number;
    topArea = heights[top] * (!stack.length ? i : i - stack[0] - 1);
    if (max < topArea) max = topArea;
  }

  return max;
}
