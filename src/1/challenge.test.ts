import { countIncreasingPairs } from "./challenge";

test("it counts increasing depths", () => {
  expect(countIncreasingPairs([0, 1, 2, 3, 4, 5])).toEqual(5);
  expect(countIncreasingPairs([5, 4, 3, 2, 1, 0])).toEqual(0);
});
