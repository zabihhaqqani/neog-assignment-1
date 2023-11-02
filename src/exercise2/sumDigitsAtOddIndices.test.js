import { sumDigitsAtOddIndices } from "./sumDigitsAtOddIndices";

test("sums digits at odd indices correctly", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(sumDigitsAtOddIndices(arr)).toBe(20);
});
