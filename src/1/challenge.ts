export function countIncreasingPairs(depths: number[]): number {
  return depths.reduce((acc, curr, idx, arr) => {
    if (idx === 0) return 0;

    if (curr > arr[idx - 1]) return ++acc;

    return acc;
  }, 0);
}
