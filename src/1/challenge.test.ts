import {
  countIncreasingPairs,
  getSlidingWindows,
  sumSlidingWindows,
} from "./challenge";

test("it counts increasing depths", () => {
  expect(countIncreasingPairs([0, 1, 2, 3, 4, 5])).toEqual(5);
  expect(countIncreasingPairs([5, 4, 3, 2, 1, 0])).toEqual(0);
});

test("get sliding windows", () => {
  expect(getSlidingWindows([1, 2, 3, 4, 5])).toEqual(
    expect.arrayContaining([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ])
  );
});

test("sum sliding windows", () => {
  expect(sumSlidingWindows(getSlidingWindows([1, 2, 3, 4, 5]))).toEqual([
    6, 9, 12,
  ]);
});
