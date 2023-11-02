import { getOddNumbers } from "./exercise1/getOddNumbers";
import { sumDigitsAtOddIndices } from "./exercise2/sumDigitsAtOddIndices";
import { reverseString } from "./exercise3/reverseString";
import { getShortestString } from "./exercise4/getShortestString";
import { sumArrays } from "./exercise5/sumArrays";
import { getCoordinates } from "./exercise6/getCoordinates";
import { getCarDetails } from "./exercise7/getCarDetails";
import { getBookInfo } from "./exercise8/getBookInfo";
import { areStringsEqual } from "./exercise9/areStringsEqual";
import { getNamesOfAdults } from "./exxercise10/getNamesOfAdults";

const people = [
  { name: "Alice", age: 69 },
  { name: "Bob", age: 47 },
  { name: "Charlie", age: 70 }
];

const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "gray"
};

const point = { x: 5, y: 10 };

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13]));

console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(reverseString("neoG Camp"));

console.log(getShortestString(["primary", "secondary", "education", "exams"]));

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5]));

console.log(getCoordinates(point));

console.log(getCarDetails(car));

console.log(getBookInfo(book));

console.log(areStringsEqual("Apple", "Apple"));
console.log(areStringsEqual("Apple", "apple"));
console.log(areStringsEqual("Papaya", "Watermelon"));

console.log(getNamesOfAdults(people));
