import { getCoordinates } from "./getCoordinates";

describe("get coordinates", () => {
  test("returns an array with coordinates provided in an object", () => {
    const point = { x: 5, y: 10 };
    expect(getCoordinates(point)).toEqual([5, 10]);
  });

  test("should handle missing x property", () => {
    const coordinates = { y: 30 };
    const expectedOutput = [undefined, 30];
    expect(getCoordinates(coordinates)).toEqual(expectedOutput);
  });

  test("should handle missing y property", () => {
    const coordinates = { x: 40 };
    const expectedOutput = [40, undefined];
    expect(getCoordinates(coordinates)).toEqual(expectedOutput);
  });
});
