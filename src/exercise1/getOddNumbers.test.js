import { getOddNumbers } from "./getOddNumbers";

describe("getOddNumbers", () => {
  it("returns an array containing only the odd numbers from the input array", () => {
    const input = [2, 6, 7, 3, 8, 9, 13];
    const expectedOutput = [7, 3, 9, 13];
    expect(getOddNumbers(input)).toEqual(expectedOutput);
  });

  it("returns an empty array when no odd numbers are in the input array", () => {
    const input = [2, 6, 8];
    const expectedOutput = [];
    expect(getOddNumbers(input)).toEqual(expectedOutput);
  });

  it("returns an empty array when the input array is empty", () => {
    const input = [];
    const expectedOutput = [];
    expect(getOddNumbers(input)).toEqual(expectedOutput);
  });
});
