export function countIncreasingPairs(depths: number[]): number {
  return depths.reduce((acc, curr, idx, arr) => {
    if (idx === 0) return 0;

    if (curr > arr[idx - 1]) return ++acc;

    return acc;
  }, 0);
}

export function getSlidingWindows(
  array: number[],
  result: number[][] = []
): number[][] {
  if (array.length === 3) return [...result, array];
  return [
    ...result,
    ...getSlidingWindows(array.slice(0, 3)),
    ...getSlidingWindows(array.slice(1)),
  ];
}

export function sumSlidingWindows(slidingWindows: number[][]) {
  return slidingWindows.map(
    (slidingWindow) => slidingWindow.reduce((acc, curr) => acc + curr),
    0
  );
}
