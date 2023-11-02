import { getShortestString } from "./getShortestString";

describe("get shortest word", () => {
  it("returns the shortest word in the array", () => {
    const input1 = ["primary", "secondary", "education", "exams"];
    expect(getShortestString(input1)).toEqual("exams");
  });

  it("returns the shortest word in the array", () => {
    const input2 = ["neogcamp", "rockstar", "coder"];
    expect(getShortestString(input2)).toEqual("coder");
  });

  it("should handle arrays with strings of same length", () => {
    const arr = ["apple", "cat", "dog"];
    const expectedOutput = "cat";
    expect(getShortestString(arr)).toEqual(expectedOutput);
  });

  it("should handle empty arrays", () => {
    const arr = [];
    const expectedOutput = undefined;
    expect(getShortestString(arr)).toEqual(expectedOutput);
  });
});
