import { readFileSync } from "fs";
import { countIncreasingDepths } from "./challenge";

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

function main() {
  const depths = loadDepthData();
  const result = countIncreasingDepths(depths);
  return result;
}

console.log(main());
