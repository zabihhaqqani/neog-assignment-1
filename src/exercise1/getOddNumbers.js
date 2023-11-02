// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (arr) => {
  // Your ES6 code here
  let oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    return arr[i] % 2 ? oddArr.push(arr[i]) : null;
  }

  return oddArr;
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
