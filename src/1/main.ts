import { readFileSync } from "fs";
import {
  countIncreasingPairs,
  getSlidingWindows,
  sumSlidingWindows,
} from "./challenge";

function loadDepthData(): number[] {
  try {
    const contents = readFileSync(__dirname + "/data.txt");
    const result = contents
      .toString()
      .split("\n")
      .map((value) => parseInt(value));
    return result;
  } catch (e) {
    console.error(`Could not load file: ${e}`);
    throw e;
  }
}

function part1() {
  const depths = loadDepthData();
  const result = countIncreasingPairs(depths);
  return result;
}

function part2() {
  const depths = loadDepthData();
  const slidingWindows = getSlidingWindows(depths);
  const summedWindows = sumSlidingWindows(slidingWindows);
  const result = countIncreasingPairs(summedWindows);
  return result;
}

console.log(part1());
console.log(part2());
