import { countIncreasingDepths } from "./challenge";

test("it counts increasing depths", () => {
  expect(countIncreasingDepths([0, 1, 2, 3, 4, 5])).toEqual(5);
  expect(countIncreasingDepths([5, 4, 3, 2, 1, 0])).toEqual(0);
});
