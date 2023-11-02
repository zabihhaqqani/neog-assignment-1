import { getBookInfo } from "./getBookInfo";

describe("Get book information", () => {
  test("returns a string with the title and name of author", () => {
    const book = {
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    };
    expect(getBookInfo(book)).toEqual("The Hobbit by J.R.R. Tolkien");
  });

  test("should handle empty strings for title and author", () => {
    const book = { title: "", author: "" };
    expect(getBookInfo(book)).toEqual(" by ");
  });
});
