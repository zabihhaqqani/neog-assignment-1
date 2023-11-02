import { getCarDetails } from "./getCarDetails";

describe("get car details", () => {
  test("returns a string with make, model and year of the car", () => {
    const car = {
      make: "Toyota",
      model: "Corolla",
      year: 2015,
      color: "gray"
    };
    expect(getCarDetails(car)).toEqual(
      "Make: Toyota, Model: Corolla, Year: 2015"
    );
  });

  test("should handle missing make property", () => {
    const car = { model: "Civic", year: 2022 };
    expect(getCarDetails(car)).toEqual(
      "Make: undefined, Model: Civic, Year: 2022"
    );
  });

  test("should handle missing model property", () => {
    const car = { make: "Tesla", year: 2021 };
    expect(getCarDetails(car)).toEqual(
      "Make: Tesla, Model: undefined, Year: 2021"
    );
  });

  it("should handle empty strings for make, model and year", () => {
    const car = { make: "", model: "", year: "" };
    expect(getCarDetails(car)).toEqual("Make: , Model: , Year: ");
  });
});
