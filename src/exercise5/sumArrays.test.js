import { sumArrays } from "./sumArrays";

describe("get sum of 2 arrays", () => {
  test("returns an array with sum of numbers in same index", () => {
    const input1 = [2, 3, 4, 5];
    const input2 = [5, 4, 3, 6];
    expect(sumArrays(input1, input2)).toEqual([7, 7, 7, 11]);
  });

  test("should handle arrays of different length", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];
    const expectedOutput = [5, 7, NaN];
    expect(sumArrays(arr1, arr2)).toEqual(expectedOutput);
  });

  test("should handle empty arrays", () => {
    const arr1 = [];
    const arr2 = [];
    const expectedOutput = [];
    expect(sumArrays(arr1, arr2)).toEqual(expectedOutput);
  });
});
