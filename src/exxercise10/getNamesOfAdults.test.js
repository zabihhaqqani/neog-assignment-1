import { getNamesOfAdults } from "./getNamesOfAdults";

describe("get names of adults", () => {
  test("returns an array with name of the people", () => {
    const people = [
      { name: "Alice", age: 69 },
      { name: "Bob", age: 47 },
      { name: "Charlie", age: 70 }
    ];
    expect(getNamesOfAdults(people)).toEqual(["Alice", "Charlie"]);
  });

  test("should return an empty array when there are no adults in the input array", () => {
    const people1 = [
      { name: "John", age: 30 },
      { name: "Mary", age: 40 },
      { name: "Bob", age: 50 }
    ];
    expect(getNamesOfAdults(people1)).toEqual([]);
  });

  test("should return an array containing the names of all adults in the input array", () => {
    const people = [
      { name: "John", age: 70 },
      { name: "Mary", age: 80 },
      { name: "Bob", age: 65 }
    ];
    expect(getNamesOfAdults(people)).toEqual(["John", "Mary", "Bob"]);
  });
});
