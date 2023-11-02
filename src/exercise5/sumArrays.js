// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (arr1, arr2) => {
  // Your ES6 code here
  const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  let sumArr = [];
  for (let i = 0; i < maxLength; i++) {
    sumArr.push(arr1[i] + arr2[i]);
  }

  return sumArr;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
