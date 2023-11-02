import { areStringsEqual } from "./areStringsEqual";

describe("Check if given strings matches", () => {
  const apple = "apple";
  const banana = "banana";

  test("returns true if strings match", () => {
    expect(areStringsEqual(apple, apple)).toBeTruthy();
  });

  test("returns false if strings dont match", () => {
    expect(areStringsEqual(apple, banana)).toBeFalsy();
  });

  test("should return false when one of the strings is empty", () => {
    expect(areStringsEqual("", "hello")).toBeFalsy();
  });

  test("should be case-sensitive", () => {
    expect(areStringsEqual("hello", "Hello")).toBeFalsy();
  });
});
